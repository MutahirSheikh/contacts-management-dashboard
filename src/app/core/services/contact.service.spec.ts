import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactService } from './contact.service';
import { MOCK_CONTACTS, MOCK_EMAILS } from '../mock/mock-data';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch contacts from the API', () => {
    service.getContacts().subscribe(contacts => {
      expect(contacts.length).toBe(MOCK_CONTACTS.length);
      expect(contacts[0].firstName).toBe(MOCK_CONTACTS[0].firstName);
    });

    const req = httpMock.expectOne('https://mockapi.io/api/v1/contacts');
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_CONTACTS);
  });

  it('should fetch emails for a specific contact', () => {
    const contactId = '3';
    const mockEmails = MOCK_EMAILS.filter(e => e.contactId === contactId);

    service.getEmailAddresses(contactId).subscribe(emails => {
      expect(emails.length).toBe(mockEmails.length);
      expect(emails[0].email).toBe(mockEmails[0].email);
    });

    const req = httpMock.expectOne(`https://mockapi.io/api/v1/contacts/${contactId}/email_addresses`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEmails);
  });
});
