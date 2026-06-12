import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactStateService } from '../../core/services/contact-state.service';
import { Contact, EmailAddress } from '../../core/models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  contact$: Observable<Contact | null>;
  emails$: Observable<EmailAddress[]>;
  loading$: Observable<boolean>;

  constructor(private stateService: ContactStateService) {
    this.contact$ = this.stateService.selectedContact$;
    this.emails$ = this.stateService.selectedContactEmails$;
    this.loading$ = this.stateService.loading$;
  }

  getInitials(contact: Contact): string {
    return `${contact.firstName[0]}${contact.lastName[0]}`.toUpperCase();
  }
}
