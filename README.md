# Contacts Management Dashboard

A responsive, pixel-perfect frontend Single Page Application (SPA) built using **Angular 18**, **TypeScript**, and **SCSS**. The interface matches the professional Figma contact dashboard template, implementing modern UI patterns, reactive state management, and mock API data loading.

---

## ✨ Features

- **Split-Pane Layout**: Side-by-side split screen view on desktop screens (sidebar + details), transitioning to a mobile-optimized view that toggles between list navigation and detailed contact views.
- **Dynamic Search & Filtering**: Real-time search that instantly filters the contact list by first name, last name, role, dial username, phone numbers, and email addresses.
- **Reactive State Management**: Built using the **State Pattern** with RxJS `BehaviorSubject` streams, keeping UI components thin and ensuring a clean unidirectional data flow.
- **Asynchronous Lazy Loading**: Main contact cards load instantly, while detailed email addresses are fetched dynamically via sub-requests (`/contacts/{id}/email_addresses`) only when a contact is selected.
- **Mock REST API Interceptor**: Utilizes an Angular HTTP Interceptor to mock REST endpoints (`/contacts` and `/contacts/{id}/email_addresses`), simulating network latency and status response codes locally.
- **Modern SCSS Design System**: Tailored with CSS variables for custom status dot styling (online, away, offline indicators), premium color palettes (indigo, lavender gray), modern typography (Inter), and styled scrollbars.
- **100% Test Coverage**: Complete unit testing coverage with 20 Jasmine/Karma test specs verifying API routing, state mutations, and UI rendering hooks.

---

## 🛠️ Built With

- **Framework**: Angular v18.2.0 (using Standalone Components)
- **Language**: TypeScript v5.5.2
- **Styling**: SCSS (CSS variables and nested selectors)
- **Icons**: Font Awesome v6.5.2 & Google Material Icons (Outlined)
- **Testing**: Jasmine (unit specs) & Karma (test runner)

---

## 📁 Directory Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── contact-details/         # Detail rendering panel (bio, emails, phones, socials)
│   │   ├── contact-list/            # List pane (header, search bar, contact list rows)
│   │   └── dashboard/               # Layout wrapper handling mobile responsiveness
│   ├── core/
│   │   ├── interceptors/
│   │   │   └── mock-http.interceptor.ts  # Mocks API REST responses & latency
│   │   ├── mock/
│   │   │   └── mock-data.ts         # Mock contacts database
│   │   ├── models/
│   │   │   └── contact.model.ts     # TypeScript Interfaces (Contact, Email, Phone)
│   │   └── services/
│   │       ├── contact.service.ts   # Performs HTTP client queries
│   │       └── contact-state.service.ts  # Reactive central state and search logic
│   ├── app.component.html           # Simple Router outlet container
│   ├── app.component.ts             # App bootstrapping
│   ├── app.config.ts                # Application configuration & HTTP providers
│   └── app.routes.ts                # Router configuration (/contacts)
├── public/
│   └── favicon.ico                  # Site icon
├── index.html                       # HTML base template (includes font links)
├── main.ts                          # App starting point
└── styles.scss                      # Global resets, variables, and design tokens
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- Compatible with Node.js v18.19.1+ / v20.11.1+ / v22.0.0+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MutahirSheikh/contacts-management-dashboard.git
   cd contacts-management-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npx ng serve
# or
npx ng s
```

Once running, navigate to `http://localhost:4200/` in your browser.

### Running Tests

Execute the unit test suite in headless mode (or standard browser mode):
```bash
# Headless Chrome execution
npx ng test --watch=false --browsers=ChromeHeadless

# Standard Karma watcher execution
ng test
```

### Production Build

Build the production bundles:
```bash
ng build
```
The output files will be compiled and saved inside the `dist/contacts-app` directory.
```
