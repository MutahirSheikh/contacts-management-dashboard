import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactStateService } from '../../core/services/contact-state.service';
import { Contact } from '../../core/models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  filteredContacts$: Observable<Contact[]>;
  selectedContact$: Observable<Contact | null>;
  searchQuery: string = '';

  constructor(private stateService: ContactStateService) {
    this.filteredContacts$ = this.stateService.filteredContacts$;
    this.selectedContact$ = this.stateService.selectedContact$;
  }

  ngOnInit(): void {
    this.stateService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
    });
  }

  onSearch(query: string): void {
    this.stateService.setSearchQuery(query);
  }

  selectContact(contact: Contact): void {
    this.stateService.selectContact(contact);
  }

  getInitials(contact: Contact): string {
    return `${contact.firstName[0]}${contact.lastName[0]}`.toUpperCase();
  }
}
