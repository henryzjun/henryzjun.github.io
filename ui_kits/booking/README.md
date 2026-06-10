# UI Kit — 預約／聯絡流程 Booking & Contact Flow

A friendly three-step booking flow with a live summary sidebar and a confirmation
state. Embodies the brand's "無侵略感" warmth — soft cards, gentle progress, no pressure.

## Screens / sections
- **Stepper.jsx** — horizontal progress indicator (numbered → check when done).
- **Steps.jsx** — the four bodies: `StepChoose` (package radio cards), `StepDetails`
  (location / date / people / notes), `StepContact` (name / LINE / email), `StepDone`
  (success confirmation with booking number).
- **BookingSummary.jsx** — sticky summary card mirroring the live form data + price.

## Interaction
`index.html` holds the wizard state, advances through steps, and shows the summary
until submission. 送出預約 reveals the confirmation; links back to the gallery & home.

## Components used
`Button`, `Input`, `Select`, `Card`, `Badge`, `MetaRow` from `window.HenryStudioRemix_704588`.

> Form is front-end only — no submission backend. Wire `StepContact` + 送出預約 to your
> CRM / email / LINE webhook in production.
