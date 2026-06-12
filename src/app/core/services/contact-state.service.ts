import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact, EmailAddress } from '../models/contact.model';
import { ContactService } from './contact.service';
import { MOCK_EMAILS } from '../mock/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ContactStateService {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  private selectedContactSubject = new BehaviorSubject<Contact | null>(null);
  private selectedContactEmailsSubject = new BehaviorSubject<EmailAddress[]>([]);
  private searchQuerySubject = new BehaviorSubject<string>('');
  private loadingSubject = new BehaviorSubject<boolean>(false);

  contacts$ = this.contactsSubject.asObservable();
  selectedContact$ = this.selectedContactSubject.asObservable();
  selectedContactEmails$ = this.selectedContactEmailsSubject.asObservable();
  searchQuery$ = this.searchQuerySubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  // Dynamically filtered contacts list based on search query
  filteredContacts$: Observable<Contact[]> = combineLatest([
    this.contacts$,
    this.searchQuery$
  ]).pipe(
    map(([contacts, query]) => this.filterContacts(contacts, query))
  );

  constructor(private contactService: ContactService) {}

  loadContacts(): void {
    this.loadingSubject.next(true);
    this.contactService.getContacts().subscribe({
      next: (contacts) => {
        this.contactsSubject.next(contacts);
        this.loadingSubject.next(false);
        // Select Johanna Stevens (id '3') by default to match the mock screenshot
        const johanna = contacts.find(c => c.id === '3');
        if (johanna) {
          this.selectContact(johanna);
        } else if (contacts.length > 0) {
          this.selectContact(contacts[0]);
        }
      },
      error: () => {
        this.loadingSubject.next(false);
      }
    });
  }

  selectContact(contact: Contact | null): void {
    this.selectedContactSubject.next(contact);
    if (contact) {
      this.loadingSubject.next(true);
      this.contactService.getEmailAddresses(contact.id).subscribe({
        next: (emails) => {
          this.selectedContactEmailsSubject.next(emails);
          this.loadingSubject.next(false);
        },
        error: () => {
          this.selectedContactEmailsSubject.next([]);
          this.loadingSubject.next(false);
        }
      });
    } else {
      this.selectedContactEmailsSubject.next([]);
    }
  }

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  private filterContacts(contacts: Contact[], query: string): Contact[] {
    const q = query.trim().toLowerCase();
    if (!q) {
      return contacts;
    }

    return contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      const role = contact.role.toLowerCase();
      const dial = contact.dialUsername.toLowerCase();
      
      const matchesPhone = contact.phones.some(p => 
        p.number.replace(/[-\s]/g, '').includes(q.replace(/[-\s]/g, ''))
      );

      const contactEmails = MOCK_EMAILS.filter(e => e.contactId === contact.id);
      const matchesEmail = contactEmails.some(e => e.email.toLowerCase().includes(q));

      return (
        fullName.includes(q) ||
        role.includes(q) ||
        dial.includes(q) ||
        matchesPhone ||
        matchesEmail
      );
    });
  }
}
