# English document translations — review only

Prepared 10 November 2026. These files are unapproved translations, not new operative legal editions. No publication, acceptance, payment, consent or data-processing configuration is enabled by this change.

## Sources

- Privacy: <https://ta2tut.ru/privacy>, Russian edition **1.0, 21 August 2026**. Retrieved HTML SHA-256: `a9fbf0ee6abd9e589ba9ee05d79be1aedc41d8572309aa2fb9d7c7b0fbe3ae73`. It is byte-identical to `privacy.html` at landing base `2ff9c98955172624ddd643a43490bb98d475debd`.
- Public offer: <https://tattootut.github.io/apps/legal/oferta.pdf>. Russian revision **4.14, 2 October 2026**. PDF SHA-256: `b329d02cdd7b6c3bdd4c11498e3fbc5972342327d474701df4a2a92efd539dac`. The offer translation is reviewed against this PDF, not against the draft terms in the full Sites application.
- New hub: `/documents/`, with `?lang=ru` or `?lang=en`. Its primary links retain the two current Russian documents above. The Russian legal source files are unchanged.

## Reused and intentionally separate

The landing already supplies brand colours, navigation and the current Russian policy. The new page reuses those colours, uses system fonts, and adds a footer entry. It stores no language preference and makes no analytics, authentication or consent request.

The full application hosted at `tattoo-tut-lab-nikolai.nickblock.chatgpt.site` already has draft `/legal/` pages and draft English translations dated 29 October 2026. They describe a different pre-launch application state and are not translations of the currently linked bot documents; they have not been substituted here.

## HQ/legal decisions before publication

1. Confirm the English translation and the legal name's transliteration. The privacy draft preserves **Individual Entrepreneur Melnikov Nikolai Igorevich**, INN **501885184736**, OGRNIP **322508100401600**, Korolyov, Moscow Region, and the existing support email. No evidence establishing a different international operator or registered details was supplied; none has been invented.
2. Confirm whether the international product has different services, processors, payment providers, currencies, refunds, consumer rights or dispute terms. A translation of the Russian document does not resolve those differences. The present English draft preserves the Russian source's conditions.
3. Reconcile the Russian privacy source with the separate consent work: Section 5 currently says sending `/start` gives consent; Section 7 describes cross-border consent through service use. This navigation change does not implement, endorse or silently amend those statements.
4. Verify existing operational statements before any new edition: hosting and backup locations in 6.1; file/session/metadata retention in 6.3; the listed processors in 7.1; the withdrawal, deletion and refund procedure in 8; website cookies in 9; notification and effective-date rules in 11. These statements are translated faithfully, not certified as current.
5. Keep the translation review labels until an explicit legal/content acceptance. The hub's `noindex` and draft files' `noindex,nofollow` are review-stage settings; they do not provide access control.

No bot or Mini App entry has been switched to this new URL. That handover is a separate step after page acceptance.


## Offer-specific review findings (preserved in the translation)

- Clause **4.A.1** retains the “trial period with subscription” and says no payment method is saved for a one-off trial, while **4.5** and the revision history discontinue trial subscriptions and allow separately agreed saving of a payment method. No silent reconciliation was made.
- Clauses **5.2(2)** and **5.3** still refer to the first charge after a subscription trial and to the prior notification under the first paragraph of **4.A.2-bis**. The current 4.A.2-bis covers notification after a charge; the revision history says the earlier advance notification was removed.
- **Lava's legal details remain “to be confirmed”** in clauses 4.2 and 11. No entity name, address, registration number or contractual role has been invented.
- Clauses **3.1–3.2** include `/start`, use and acceptance of documents. Navigation is separate from the TTT-0005 consent work and does not implement those legal provisions.
- The source's revision-history order (4.4 → 4.3 → 4.5 → 4.2) and reference prices are preserved. They do not authorise changing current product prices.
- The only expressly described international distinction in this source is **Lava for payments from outside Russia, including subscriptions**; the trial credit in clause 4.5 does not apply to Lava payments unless shown on the payment screen. The source otherwise retains the Russian entrepreneur, Russian details, ruble amounts, Russian law and the court provisions in 10.2–10.3. Any international replacement requires a separate reviewed edition.

Terminology: Исполнитель → Service Provider; Пользователь → User; Мастер → Artist; Клиент → Customer; Тариф → Plan; Разовая покупка → One-time Purchase; разовый расчётный период → one-off billing period; Кабинет → Account; Операция → Operation; Трансфер → Transfer (stencil); СБП → Faster Payments System (SBP); кассовый чек → fiscal receipt. The legal service name «ТАТУ ТУТ» stays in Cyrillic. Transliterations of names and descriptive translations of Russian organisations require reviewer confirmation.

## Mechanical translation checks

`offer-source-checks.json` records the source translator's checks: 86 ordered clause headings and matching multisets of numeric tokens, dates, identifiers, references and URLs. The rendered `offer.en.html` additionally preserves the complete visible-text sequence of `oferta-en-review.md` after removing only Markdown layout markers; all three tables remain HTML tables. These mechanical checks are not legal certification. Browser evidence and render comparison are in the task's separate handoff evidence directory.
