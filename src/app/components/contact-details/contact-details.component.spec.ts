import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDetailsComponent } from './contact-details.component';
import { ContactStateService } from '../../core/services/contact-state.service';
import { of } from 'rxjs';
import { MOCK_CONTACTS, MOCK_EMAILS } from '../../core/mock/mock-data';
import { By } from '@angular/platform-browser';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let mockContact = MOCK_CONTACTS[2]; // Johanna Stevens
  let mockEmails = MOCK_EMAILS.filter(e => e.contactId === mockContact.id);

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ContactStateService', [], {
      selectedContact$: of(mockContact),
      selectedContactEmails$: of(mockEmails),
      loading$: of(false)
    });

    await TestBed.configureTestingModule({
      imports: [ContactDetailsComponent],
      providers: [
        { provide: ContactStateService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contact details header', () => {
    const nameText = fixture.debugElement.query(By.css('.profile-name')).nativeElement.textContent;
    expect(nameText).toContain(mockContact.firstName);
    expect(nameText).toContain(mockContact.lastName);
  });

  it('should render bio text', () => {
    const bioText = fixture.debugElement.query(By.css('.bio-text')).nativeElement.textContent;
    expect(bioText).toContain(mockContact.bio);
  });

  it('should render the list of emails and indicate primary', () => {
    const emailDivs = fixture.debugElement.queryAll(By.css('.details-grid .grid-row:nth-child(2) .value-item'));
    expect(emailDivs.length).toBe(mockEmails.length);
    
    // First email should have a primary badge
    const firstEmailBadge = emailDivs[0].query(By.css('.badge'));
    expect(firstEmailBadge).toBeTruthy();
    expect(firstEmailBadge.nativeElement.textContent).toContain('Primary');

    // Second email should NOT have a primary badge
    if (mockEmails.length > 1) {
      const secondEmailBadge = emailDivs[1].query(By.css('.badge'));
      expect(secondEmailBadge).toBeFalsy();
    }
  });

  it('should render dial, meeting and phone info correctly', () => {
    const dialText = fixture.debugElement.query(By.css('.details-grid .grid-row:nth-child(3) .value-text')).nativeElement.textContent;
    expect(dialText).toContain(mockContact.dialUsername);

    const meetingLink = fixture.debugElement.query(By.css('.meeting-link')).nativeElement;
    expect(meetingLink.getAttribute('href')).toBe(mockContact.meetingUrl);

    const phoneDivs = fixture.debugElement.queryAll(By.css('.details-grid .grid-row:nth-child(5) .value-item'));
    expect(phoneDivs.length).toBe(mockContact.phones.length);
  });
});
