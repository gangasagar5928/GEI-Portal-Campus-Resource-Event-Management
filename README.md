# GEI Campus Resource & Event Management System (v1.0)

[![CI/CD Pipeline](https://github.com/gangasagar5928/GEI-Portal-Campus-Resource-Event-Management/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/gangasagar5928/GEI-Portal-Campus-Resource-Event-Management/actions/workflows/ci-cd.yml)

**Institution:** Galgotias Educational Institutions (GEI)  
**Target:** Student Council GCET Campus Management Platform  
**Architecture:** Cloud-ready SPA & PWA with Spark free-tier compliance

---

## 🏛️ Institutional Governance
- **CEO (Higher Approver):** Executive Review & Final Sign-off for Auditorium / High-Value Events
- **Administrative Head:** Central Resource Management, Conflict Prevention & Account Provisioning
- **Preloaded Club Registry:** 21 Student Council GCET Clubs with dual club-head seats.

---

## ⚡ Key Capabilities

### 1. Preloaded Club Registry (2026–27)
- Preloaded all 21 Student Council GCET clubs:
  1. Apex
  2. Athlon
  3. Campus Connectus
  4. Chromatrix
  5. Creatrix
  6. Enthiran
  7. Eventus
  8. Iris
  9. Lingua Franca
  10. Loop
  11. Mercatus
  12. Mudra
  13. NrityaX
  14. Online Promotions
  15. Raag
  16. Rangmanch
  17. Scintillations
  18. Scriptus
  19. Sorotic Pegasus
  20. StageX
  21. Udyam
- Administrator account-mapping tool maps each authorized student leader to their official institutional `@galgotias.edu` email and activates accounts.
- Supports instant account deactivation, password reset, and annual academic rollover (e.g., 2026-27 to 2027-28).

### 2. Request & Approval Workflow
- Status lifecycle: `Submitted` ➔ `Under Review` ➔ `Need Clarification` ➔ `Forwarded for Approval` ➔ `Approved` / `Rejected`
- **Administrative Head Actions:**
  - **Accept:** Direct approval, reserves equipment, creates confirmed booking.
  - **Reject:** Declines with mandatory reason.
  - **Need Clarification:** Returns request to club head with a question prompt.
  - **Forward for Approval:** Moves request to CEO for higher review.
- **Clarification Roundtrip:** Club head responds directly to the prompt, returning status to `Under Review`.
- **CEO Sign-off:** Higher approver reviews forwarded major events and grants executive approval with decision comments.
- **Immutable Audit Trail:** Chronological log of every actor, action, timestamp, and comment.

### 3. Auditorium Schedule & Conflict Prevention
- Real-time overlap detector: Checks `(startTime < existingEnd && endTime > existingStart)` for same venue and date.
- Blocks double bookings on all campus venues (Main Auditorium, Mini Auditorium, Seminar Hall, Open Air Amphitheatre).
- Confirmed events are published to the mobile-friendly public portal.
- Shields internal approval comments, contact info, and requisition details from public view.

### 4. Campus AV & Stage Equipment Inventory
- Tracks total vs. available quantities (Microphones, Projectors, Digital Podiums, Stage Lighting, Audio Consoles).
- Deducts inventory upon request approval, restores upon cancellation.
- Prevents over-allocation.

### 5. Firebase Security & Cost Protection
- **`firestore.rules`:** Production-grade security rules denying public access by default, enforcing strict role-based writes, and making the approval history subcollection immutable.
- **`firebase.json`:** Ready for Firebase Hosting and Firestore deployment.
- **Zero-Cost:** Direct Firebase Auth + Firestore architecture compliant with Firebase Spark free tier.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Production build
npm run build
```
