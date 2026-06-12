import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact, EmailAddress } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://mockapi.io/api/v1'; // Simulated endpoint (intercepted by interceptor)

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`);
  }

  getEmailAddresses(contactId: string): Observable<EmailAddress[]> {
    return this.http.get<EmailAddress[]>(`${this.apiUrl}/contacts/${contactId}/email_addresses`);
  }
}
