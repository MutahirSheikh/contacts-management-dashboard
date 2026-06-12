import { Contact, EmailAddress } from '../models/contact.model';

export const MOCK_CONTACTS: Contact[] = [
  {
    id: '1',
    firstName: 'Nicholas',
    lastName: 'Gordon',
    role: 'Developer',
    status: 'online',
    bio: 'Experienced full-stack developer with a passion for building scalable web applications and clean code architectures.',
    dialUsername: 'n.gordon@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/n.gordon',
    phones: [
      { number: '405-555-0199', isPrimary: true },
      { number: '602-555-0143', isPrimary: false }
    ],
    socials: {
      linkedin: '#',
      twitter: '#',
      google: '#'
    }
  },
  {
    id: '2',
    firstName: 'Bradley',
    lastName: 'Malone',
    role: 'Sales Manager',
    status: 'away',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Dynamic sales professional with over 8 years of experience leading successful customer acquisition campaigns.',
    dialUsername: 'b.malone@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/b.malone',
    phones: [
      { number: '312-555-0177', isPrimary: true }
    ],
    socials: {
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    id: '3',
    firstName: 'Johanna',
    lastName: 'Stevens',
    role: 'Project Manager',
    status: 'online',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'When I first got into the advertising. I was looking for the magical combination that would put website into the top search engine rankings',
    dialUsername: 'j.stevens@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/j.stevens',
    phones: [
      { number: '439-582-1578', isPrimary: true },
      { number: '621-770-7689', isPrimary: false }
    ],
    socials: {
      facebook: '#',
      pinterest: '#',
      twitter: '#',
      linkedin: '#',
      google: '#'
    }
  },
  {
    id: '4',
    firstName: 'Marvin',
    lastName: 'Lambert',
    role: 'Designer',
    status: 'away',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    bio: 'Creative graphic and UI designer specializing in modern branding, interface design, and typography.',
    dialUsername: 'm.lambert@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/m.lambert',
    phones: [
      { number: '206-555-0122', isPrimary: true }
    ],
    socials: {
      pinterest: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: '5',
    firstName: 'Teresa',
    lastName: 'Lloyd',
    role: 'PR agent',
    status: 'away',
    bio: 'Public relations specialist dedicated to crafting compelling stories and building strong media partnerships.',
    dialUsername: 't.lloyd@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/t.lloyd',
    phones: [
      { number: '212-555-0155', isPrimary: true }
    ],
    socials: {
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: '6',
    firstName: 'Fred',
    lastName: 'Haynes',
    role: 'Support Team',
    status: 'offline',
    avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    bio: 'Customer success engineer focused on resolving technical issues and delivering world-class client support.',
    dialUsername: 'f.haynes@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/f.haynes',
    phones: [
      { number: '800-555-0166', isPrimary: true }
    ],
    socials: {
      linkedin: '#',
      google: '#'
    }
  },
  {
    id: '7',
    firstName: 'Rose',
    lastName: 'Peters',
    role: 'Project Manager',
    status: 'offline',
    avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'Agile project manager with a track record of delivering software projects on time, on budget, and within scope.',
    dialUsername: 'r.peters@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/r.peters',
    phones: [
      { number: '650-555-0188', isPrimary: true }
    ],
    socials: {
      linkedin: '#',
      twitter: '#',
      google: '#'
    }
  },
  {
    id: '8',
    firstName: 'Brian',
    lastName: 'Watson',
    role: 'Developer',
    status: 'online',
    bio: 'Backend developer specializing in Node.js, databases, and microservices architecture.',
    dialUsername: 'b.watson@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/b.watson',
    phones: [
      { number: '415-555-0144', isPrimary: true }
    ],
    socials: {
      linkedin: '#'
    }
  },
  {
    id: '9',
    firstName: 'Hettle',
    lastName: 'Richardson',
    role: 'Developer',
    status: 'online',
    bio: 'Frontend developer focused on building beautiful, accessible, and high-performance user interfaces.',
    dialUsername: 'h.richardson@ymsg.com',
    meetingUrl: 'http://go.betacall.com/meet/h.richardson',
    phones: [
      { number: '206-555-0133', isPrimary: true }
    ],
    socials: {
      twitter: '#',
      linkedin: '#'
    }
  }
];

export const MOCK_EMAILS: EmailAddress[] = [
  { id: 'e1', contactId: '1', email: 'nicholas.gordon@gmail.com', isPrimary: true },
  { id: 'e2', contactId: '1', email: 'n.gordon@workspace.dev', isPrimary: false },
  
  { id: 'e3', contactId: '2', email: 'bradley.malone@gmail.com', isPrimary: true },
  
  { id: 'e4', contactId: '3', email: 'johanna.stevens@gmail.com', isPrimary: true },
  { id: 'e5', contactId: '3', email: 'johanna.stevens@whiteui.store', isPrimary: false },
  
  { id: 'e6', contactId: '4', email: 'marvin.lambert@gmail.com', isPrimary: true },
  { id: 'e7', contactId: '4', email: 'marvin@designagency.co', isPrimary: false },
  
  { id: 'e8', contactId: '5', email: 'teresa.lloyd@gmail.com', isPrimary: true },
  
  { id: 'e9', contactId: '6', email: 'fred.haynes@gmail.com', isPrimary: true },
  
  { id: 'e10', contactId: '7', email: 'rose.peters@gmail.com', isPrimary: true },
  { id: 'e11', contactId: '7', email: 'rose@pm-experts.net', isPrimary: false },
  
  { id: 'e12', contactId: '8', email: 'brian.watson@gmail.com', isPrimary: true },
  
  { id: 'e13', contactId: '9', email: 'hettle.richardson@gmail.com', isPrimary: true }
];
