# Website assistant and meeting requests

The floating assistant answers common firm questions from the existing public contact and practice-area copy. It is a local, rules-based website assistant, not an AI legal adviser. It does not send chat messages to an external model or retain conversations after a page reload. Unknown questions are referred to the firm.

Visitors can request a date and preferred time in Africa/Lagos. These times are not checked against a calendar. The interface never confirms an appointment: the firm must respond to confirm availability.

The `/api/send-booking` route validates contact details and future dates before emailing through Resend's HTTPS API. Configure `RESEND_API_KEY` securely on the deployment and allow `api.resend.com`. All requests go to `info@kkubaniandco.com`, with the visitor's email in Reply-To. The default sender is `K.K. Ubani & Co. <bookings@mail.ibiz.name.ng>`; verify `mail.ibiz.name.ng` in the Resend account and complete its required DNS records before enabling delivery. Optional `RESEND_FROM_EMAIL` overrides the sender with another address verified in that account. Do not commit credentials. Missing configuration or a rejected API request produces an error, never a booking success. API acceptance does not guarantee inbox delivery; check Resend delivery events when investigating missing mail.

For automatic confirmed bookings, connect a scheduling provider or supply the firm's scheduling URL. Before exposing email requests to heavy public traffic, configure deployment-level rate limits and bot protection for `/api/send-booking`.

Validation: `node --test tests/*.test.mjs` and `./node_modules/.bin/tsc --noEmit`. Resend is mocked in tests; they do not send email. Production compilation still requires Google Fonts network access as described in the environment setup.

The chat displays an automated typing indicator before replies. It answers office hours, location and firm information directly from current public copy, and retrieves substantive public page text for broader matching questions with source links. It remains an automated, deterministic assistant; it does not impersonate staff. “Talk to a human” opens an email to info@kkubaniandco.com with a website enquiry subject. The team replies by email when available; no live agent is claimed to be present in the chat.
