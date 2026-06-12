import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ContactStateService } from '../../core/services/contact-state.service';
import { ContactService } from '../../core/services/contact.service';
import { of } from 'rxjs';
import { MOCK_CONTACTS } from '../../core/mock/mock-data';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockContactService: jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    const contactServiceSpy = jasmine.createSpyObj('ContactService', ['getContacts', 'getEmailAddresses']);
    contactServiceSpy.getContacts.and.returnValue(of(MOCK_CONTACTS));
    contactServiceSpy.getEmailAddresses.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [DashboardComponent, ContactListComponent, ContactDetailsComponent],
      providers: [
        ContactStateService,
        { provide: ContactService, useValue: contactServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    mockContactService = TestBed.inject(ContactService) as jasmine.SpyObj<ContactService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load contacts on init', () => {
    expect(mockContactService.getContacts).toHaveBeenCalled();
  });
});
