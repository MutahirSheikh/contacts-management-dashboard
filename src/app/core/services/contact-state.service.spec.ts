import { TestBed } from '@angular/core/testing';
import { ContactStateService } from './contact-state.service';
import { ContactService } from './contact.service';
import { of } from 'rxjs';
import { MOCK_CONTACTS, MOCK_EMAILS } from '../mock/mock-data';

describe('ContactStateService', () => {
  let service: ContactStateService;
  let contactServiceSpy: jasmine.SpyObj<ContactService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ContactService', ['getContacts', 'getEmailAddresses']);
    spy.getContacts.and.returnValue(of(MOCK_CONTACTS));
    spy.getEmailAddresses.and.returnValue(of([]));
    
    TestBed.configureTestingModule({
      providers: [
        ContactStateService,
        { provide: ContactService, useValue: spy }
      ]
    });
    service = TestBed.inject(ContactStateService);
    contactServiceSpy = TestBed.inject(ContactService) as jasmine.SpyObj<ContactService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load contacts and select Johanna Stevens by default', () => {
    contactServiceSpy.getContacts.and.returnValue(of(MOCK_CONTACTS));
    // Provide emails for selection load
    contactServiceSpy.getEmailAddresses.and.returnValue(of([]));

    service.loadContacts();

    service.contacts$.subscribe(contacts => {
      expect(contacts.length).toBe(MOCK_CONTACTS.length);
    });

    service.selectedContact$.subscribe(selected => {
      expect(selected?.id).toBe('3'); // Johanna Stevens
    });
  });

  it('should filter contacts based on query', (done) => {
    contactServiceSpy.getContacts.and.returnValue(of(MOCK_CONTACTS));
    service.loadContacts();

    // Set search query to 'Nicholas'
    service.setSearchQuery('Nicholas');

    service.filteredContacts$.subscribe(filtered => {
      expect(filtered.length).toBe(1);
      expect(filtered[0].firstName).toBe('Nicholas');
      done();
    });
  });

  it('should select contact and fetch their email addresses', (done) => {
    const contact = MOCK_CONTACTS[0]; // Nicholas
    const mockEmails = MOCK_EMAILS.filter(e => e.contactId === contact.id);
    contactServiceSpy.getEmailAddresses.and.returnValue(of(mockEmails));

    service.selectContact(contact);

    service.selectedContact$.subscribe(sel => {
      expect(sel?.id).toBe(contact.id);
    });

    service.selectedContactEmails$.subscribe(emails => {
      expect(emails.length).toBe(mockEmails.length);
      expect(emails[0].email).toBe(mockEmails[0].email);
      done();
    });
  });
});
