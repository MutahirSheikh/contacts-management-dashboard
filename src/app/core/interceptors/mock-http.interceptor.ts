import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MOCK_CONTACTS, MOCK_EMAILS } from '../mock/mock-data';

export const mockHttpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const { url, method } = req;

  // Mock GET /contacts
  if (url.endsWith('/contacts') && method === 'GET') {
    return of(new HttpResponse({ status: 200, body: MOCK_CONTACTS })).pipe(
      delay(300) // Simulate network delay
    );
  }

  // Mock GET /contacts/{id}/email_addresses
  const emailMatch = url.match(/\/contacts\/([^/]+)\/email_addresses$/);
  if (emailMatch && method === 'GET') {
    const contactId = emailMatch[1];
    const emails = MOCK_EMAILS.filter(e => e.contactId === contactId);
    return of(new HttpResponse({ status: 200, body: emails })).pipe(
      delay(200) // Simulate network delay
    );
  }

  // Pass through other requests
  return next(req);
};
