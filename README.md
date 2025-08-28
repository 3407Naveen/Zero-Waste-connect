Overview

ZeroWaste Connect bridges the gap between food surplus and food scarcity. Every day, tons of edible food go to waste while millions go hungry. This platform enables donors to list surplus food in real time and lets nearby verified NGOs claim, coordinate pickup, and deliver to communities in need—safely and efficiently.

Vision: A world where no good food goes to waste and every community has access to nutritious meals.
Mission: Save food, serve people, and sustain the planet—using technology, trust, and transparency.

Key Features

-Real-time Listings: Donors post surplus food with quantity, expiry, and location.

-Geo-Matching: Notify nearby verified NGOs with distance, capacity, and timing filters.

-Claim & Lock: First-come claim flow locks a listing to avoid duplication and confusion.

-In-App Chat: Donor ↔ NGO secure messaging to coordinate pickup and handover.

-Impact Tracking: Auto-generate metrics (meals served, kg saved, CO₂e avoided).

-Food Safety Checks: Expiry validation, temperature/storage notes, and auto-ex-piry removal.

-Badges & CSR: Donor leaderboards, social badges, and exportable CSR/ESG reports.

-Role-Based Access: Admin (trust & safety), Donor, NGO accounts with verification flow.

-Audit Trails: Immutable event history for compliance and dispute resolution.

-Localization: Multi-language & time-zone aware notifications.

How It Works

Donor adds a listing → name, quantity, categories, expiry, pickup location/time.

System notifies NGOs → geo-match + capacity filters.

NGO claims the donation → listing is locked; handover window opens.

Coordinate pickup → secure chat, OTP/QR handover confirmation.

Track impact → mark delivered, collect proof (photos/notes), update analytics & badges.

Auto clean-up → expired/unclaimed items are removed and logged.

Screenshots

Add screenshots/GIFs in /docs/screenshots/ and link them here.

Donor Dashboard – Listings & Impact

NGO App – Nearby Donations & Claim Flow

Chat & Handover – OTP/QR confirmation

Admin – Verification & Trust/Safety

Tech Stack

Adjust to match your repo. This is a sensible default.

Frontend: React (Vite/Next.js), TypeScript, TailwindCSS

Backend: Node.js + Express (or NestJS)

Database: MongoDB (or PostgreSQL)

Auth: JWT + Refresh tokens (or OAuth with Auth0/Clerk)

Maps/Geo: Mapbox/Leaflet + geospatial queries

Messages/Queue (optional): Redis / BullMQ for notifications & expiry jobs

File Storage: S3-compatible (images/proofs)

CI/CD: GitHub Actions

Containerization: Docker & Docker Compose

Zero-Waste-connect/
├─ apps/
│  ├─ web/                # React/Next.js client
│  └─ api/                # Node/Express (or NestJS) server
├─ packages/
│  ├─ ui/                 # (optional) shared UI components
│  └─ utils/              # shared utilities & types
├─ docs/
│  └─ screenshots/        # screenshots & GIFs for README
├─ .github/
│  └─ workflows/          # CI pipelines
├─ docker/                # Dockerfiles & compose profiles
├─ .env.example
├─ docker-compose.yml
├─ LICENSE
└─ README.md



Getting Started
Prerequisites

Node.js 18+ and npm/pnpm/yarn

Docker (optional but recommended)

MongoDB or PostgreSQL instance

Mapbox (or similar) API key for maps/geocoding

Quick Start (Docker)
# 1) Copy envs
cp .env.example .env

# 2) Build & run
docker compose up --build

# 3) Open
# Web:    http://localhost:3000
# API:    http://localhost:4000

Manual Start
# API
cd apps/api
cp .env.example .env
npm install
npm run dev

# Web
cd ../web
cp .env.example .env
npm install
npm run dev

Environment Variables

Create .env files in apps/api and apps/web (or monorepo root if unified).

Common

NODE_ENV=development
JWT_SECRET=change_me
CLIENT_URL=http://localhost:3000
API_URL=http://localhost:4000


Database

MONGODB_URI=mongodb://localhost:27017/zerowaste
# or
POSTGRES_URL=postgres://user:pass@localhost:5432/zerowaste


Maps/Geo

MAPBOX_TOKEN=your_mapbox_token


Storage (S3)

S3_ENDPOINT=...
S3_BUCKET=...
S3_ACCESS_KEY=...
S3_SECRET_KEY=...


Mail/Notifications (optional)

SMTP_HOST=...
SMTP_USER=...
SMTP_PASS=...

Running Tests
# API tests
cd apps/api
npm run test

# Web tests
cd ../web
npm run test


Consider adding:

Unit tests: Jest / Vitest

E2E: Playwright / Cypress

API Contract: OpenAPI + Dredd

API (Example)

Replace with your actual endpoints or OpenAPI spec.

Auth

POST /auth/register – Create Donor/NGO account

POST /auth/login – Obtain access/refresh tokens

Donations

POST /donations – Create listing { qty, category, expiry, location }

GET /donations?near=lat,lng&radius=5km – Nearby open listings

POST /donations/:id/claim – NGO claims and locks listing

POST /donations/:id/handover – OTP/QR confirmation + proof upload

POST /donations/:id/complete – Mark delivered; impact logged

Messaging

GET /chats/:donationId – Thread

POST /chats/:donationId/messages – Send message

Admin

GET /verification/pending – Review NGO/Donor docs

POST /verification/:id/approve|reject

Security & Food Safety

Verification: KYC/KYB for NGOs/Donors; document review by Admins.

Safety Fields: expiry date/time, storage notes, allergen flags, temperature logs.

Auto-Expiry: queues auto-remove expired listings to prevent unsafe claims.

Audit Logs: immutable event history for compliance.

Privacy: PII minimization, encrypted tokens, least-privilege access.

Analytics & Impact

KPIs: meals served, kg diverted from landfill, CO₂e avoided, on-time pickups.

Dashboards: donor/NGO views and admin rollups.

CSR Exports: shareable reports and social badges for partners.

Gamification: badges for milestones (e.g., 100 meals served, Zero Waste Hero).

Roadmap

Mobile apps (iOS/Android) with offline claims

Multi-hub logistics & route optimization

Multi-city expansion with regional admins

AI-assisted demand forecasting & pickup batching

Open APIs for corporate partners & POS integration

Contributing

We love contributions!

Fork the repo & create a feature branch.

Write clean code with tests and meaningful commits.

Open a PR describing what and why; link issues if applicable.

See CONTRIBUTING.md
 (create if missing) and our Code of Conduct.

Community & Support

Open an Issue for bugs/requests.

Start a Discussion for ideas and help.

For partnerships/CSR: contact@zerowasteconnect.example
 (replace with real).

License

MIT – see LICENSE
.

Acknowledgements

Donors, NGOs, and community volunteers who make redistribution possible.

Open-source libraries and contributors.

The CodeRockers team.
