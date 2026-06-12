import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { ContactStateService } from '../../core/services/contact-state.service';
import { of } from 'rxjs';
import { MOCK_CONTACTS } from '../../core/mock/mock-data';
import { By } from '@angular/platform-browser';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let stateServiceSpy: jasmine.SpyObj<ContactStateService>;

  beforeEach(async () => {
    // Create spy object with observable properties
    const spy = jasmine.createSpyObj('ContactStateService', ['selectContact', 'setSearchQuery'], {
      filteredContacts$: of(MOCK_CONTACTS),
      selectedContact$: of(MOCK_CONTACTS[2]), // Johanna selected
      searchQuery$: of('')
    });

    await TestBed.configureTestingModule({
      imports: [ContactListComponent],
      providers: [
        { provide: ContactStateService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    stateServiceSpy = TestBed.inject(ContactStateService) as jasmine.SpyObj<ContactStateService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of contacts', () => {
    const items = fixture.debugElement.queryAll(By.css('.contact-item'));
    expect(items.length).toBe(MOCK_CONTACTS.length);
  });

  it('should highlight selected contact', () => {
    const selectedItem = fixture.debugElement.query(By.css('.contact-item.selected'));
    expect(selectedItem).toBeTruthy();
    const nameText = selectedItem.query(By.css('.contact-name')).nativeElement.textContent;
    expect(nameText).toContain(MOCK_CONTACTS[2].firstName);
  });

  it('should call state service on selectContact click', () => {
    const items = fixture.debugElement.queryAll(By.css('.contact-item'));
    items[0].triggerEventHandler('click', null);
    expect(stateServiceSpy.selectContact).toHaveBeenCalledWith(MOCK_CONTACTS[0]);
  });
});
