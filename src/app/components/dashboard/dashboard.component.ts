import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ContactStateService } from '../../core/services/contact-state.service';
import { Contact } from '../../core/models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ContactListComponent, ContactDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedContact$: Observable<Contact | null>;

  constructor(private stateService: ContactStateService) {
    this.selectedContact$ = this.stateService.selectedContact$;
  }

  ngOnInit(): void {
    // Load contacts on startup
    this.stateService.loadContacts();
  }

  goBackToList(): void {
    this.stateService.selectContact(null);
  }
}
