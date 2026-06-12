export interface EmailAddress {
  id: string;
  contactId: string;
  email: string;
  isPrimary: boolean;
}

export interface PhoneNumber {
  number: string;
  isPrimary: boolean;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  status: 'online' | 'away' | 'offline';
  avatarUrl?: string;
  bio: string;
  address?: string;
  dialUsername: string;
  meetingUrl: string;
  phones: PhoneNumber[];
  socials: {
    facebook?: string;
    pinterest?: string;
    twitter?: string;
    linkedin?: string;
    google?: string;
  };
}
