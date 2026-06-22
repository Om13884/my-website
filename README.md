# Omkar Biradar — AI Automation Consultant Portfolio

Personal portfolio and lead-generation site for Omkar Biradar, AI Automation & Agent Engineer based in Bangalore, India.

Built with Next.js 15 App Router. Includes a contact form with an n8n-powered AI lead scoring + automated booking pipeline.

**Live site:** [your-domain.com](https://your-domain.com)

---

## What's Inside

| Section | Description |
|---|---|
| `/` | Home — services, process, use cases, results |
| `/about` | About Omkar — story, values, team, timeline |
| `/portfolio` | Client work with filterable project cards |
| `/services` | Service packages with FAQ |
| `/blog` | Automation guides and case studies |
| `/contact` | Contact form → triggers n8n AI lead pipeline |
| `/personal` | Personal dev page (resume-style) |
| `/admin` | Password-protected CMS for projects & FAQ |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components)
- **Styling:** Global CSS with custom properties (no Tailwind)
- **Email:** Gmail API via Nodemailer
- **Automation:** n8n (self-hosted) — AI lead scoring, slot generation, Google Calendar booking
- **Storage:** JSON flat files via `lib/data.ts` (projects, FAQ)
- **Auth:** JWT session cookie for admin panel
- **Deployment:** Vercel

---

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file at the root:

```env
# Admin panel password
ADMIN_PASSWORD=your_password_here

# JWT secret for admin session (any long random string)
SESSION_SECRET=your_jwt_secret_here

# Gmail SMTP (for contact form emails)
GMAIL_USER=your_gmail@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password

# Email to receive contact form leads
CONTACT_TO_EMAIL=your_email@gmail.com
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → generate one for "Mail".

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## n8n Automation Workflows

Two n8n workflows power the contact-form-to-booking pipeline:

| File | What it does |
|---|---|
| `n8n-workflow-1-form-submission.json` | Receives form data → scores lead with AI → generates 5 IST time slots → saves to Google Sheets → emails slots to client + notifies Omkar |
| `n8n-workflow-2-booking-reply.json` | Watches Gmail for client reply → extracts chosen slot → creates Google Calendar event + Meet link → confirms booking with client |

### Import steps
1. Open your n8n instance
2. Go to **Workflows → Import from file**
3. Import each JSON file
4. Connect your credentials: Gmail OAuth2, Google Sheets OAuth2, Google Calendar OAuth2, OpenRouter API
5. Set your Google Sheet ID in both workflows
6. Activate both workflows

---

## Project Images

Place project screenshots in `public/project-imgs/` named `image2.png` through `image7.png`. These map to the 6 portfolio cards defined in `data/projects.json`.

---

## Admin Panel

Visit `/admin/login` and enter your `ADMIN_PASSWORD` to access the CMS. From there you can edit portfolio projects and FAQ items without touching code.

---

## Deployment

See [Deployment Guide](#deploy-to-vercel) below.

---

## License

Personal portfolio — not licensed for reuse. All content and branding belongs to Omkar Biradar.
