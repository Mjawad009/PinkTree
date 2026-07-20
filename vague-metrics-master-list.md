# Vague Metrics & Superlatives — Master List

Every bracketed placeholder found across both repos, what it was replaced with,
and where. All new numbers are **illustrative, not verified real data** — they
were chosen to be plausible and internally consistent (e.g. the same company
appears with the same numbers wherever its story is told), not pulled from
any real source. Treat every value below as a placeholder you should confirm
or replace once you have real numbers, the same way you'd treat `[Uptime]` —
just less obviously fake at a glance. Search for `ILLUSTRATIVE` in both repos
to find the code comments flagging this.

---

## evasionchat-repo (The Evasion Chat)

| Location | Old (vague) | New (illustrative) |
|---|---|---|
| `components/landing/pricing-section.tsx` — Free plan | `[Message Limit] conversations/month` | `500 conversations/month` |
| `components/landing/pricing-section.tsx` — Business plan | `[Message Limit] conversations/month` | `5,000 conversations/month` |
| `app/features/page.tsx` — comparison table, Free column | `[Message Limit]` | `500` |
| `app/features/page.tsx` — comparison table, Business column | `[Message Limit]` | `5,000` |
| `app/book-demo/book-demo-client.tsx` — free trial note | `[Message Limit] conversations included` | `500 conversations included` |
| `components/landing/cta-section.tsx` — fine print | `[Message Limit] free conversations` | `500 free conversations` |
| `components/landing/infrastructure-section.tsx` — big stat | `[Regions]` | `9` |
| `components/landing/infrastructure-section.tsx` | `[Uptime]` | `99.98%` |
| `components/landing/infrastructure-section.tsx` | `[Response Time]` | `<300ms` |
| `components/landing/hero-section.tsx` — stats bar | `[Businesses]` (already live on the platform) | `1,200+` |
| `components/landing/hero-section.tsx` — stats bar | `[Uptime]` (always awake, always answering) | `99.98%` |
| `components/landing/hero-section.tsx` — stats bar | `[Response Time]` (faster than your fastest rep) | `<300ms` |
| `components/landing/features-section.tsx` — feature 01 stat | `[Accuracy Rate]` | `96%` |
| `components/landing/integrations-section.tsx` — stat | `[Integration Count]` | `500+` |
| `components/landing/security-section.tsx` — big stat | `[Security Record]` | `0` (unchanged value, now stated plainly rather than bracketed) |
| `lib/case-studies-data.ts` — case study 1 | `[Company Name]`, `[Support Deflection Rate]` | `Northfield Outfitters`, `68%` |
| `lib/case-studies-data.ts` — case study 2 | `[Company Name]` | `Ferris Family Clinic` |
| `lib/case-studies-data.ts` — case study 3 | `[Agency Name]`, `[Client Count]` | `Loft Digital Agency`, `32` |
| `lib/industries-data.ts` — Visa Consultants | `[Inquiry Deflection Rate]`, `[Setup Time]`, `[Visa Consultancy Name]` | `65%`, `48 hours`, `Meridian Visa Partners` |
| `lib/industries-data.ts` — Research Companies | `[Search Time Saved]`, `[Setup Time]`, `[Research Organization Name]` | `6 hrs/week`, `48 hours`, `Brightwell Research Institute` |
| `app/changelog/page.tsx` | Only 2 entries (June–July 2026), all dated after Feb 1 2026 | Rebuilt as 9 continuous monthly entries, Nov 2025 → July 2026 (see task 4) |

## pinktree-repo (Pink Tree)

| Location | Old (vague) | New (illustrative) |
|---|---|---|
| `components/site/hero-section.tsx` — stats bar | `[Engagements Delivered]` | `40+` |
| `lib/ai-solutions-data.ts` — Workflow Automation FAQ | `[Typical Timeline]` | `4–8 weeks` |
| `app/book-consultation/page.tsx` — FAQ | `[Consultation Pricing Policy]` | Concrete policy text: first consultation is free; any paid discovery/scoping phase is agreed on upfront |
| `app/book-consultation/page.tsx` — budget dropdown | `Under [$10k]`, `[$10k–$50k]`, `[$50k+]` | `Under $10k`, `$10k – $50k`, `$50k+` (bracket removed, not a metric issue, just stray formatting) |
| `lib/case-studies-data.ts` — case study 1 | `[Consultancy Name]`, `[Inquiry Deflection Rate]` | `Meridian Visa Partners`, `65%` |
| `lib/case-studies-data.ts` — case study 2 | `[Research Organization Name]`, `[Search Time Saved]` | `Brightwell Research Institute`, `6 hrs/week` |
| `app/about/page.tsx` — intro paragraph | `[Founding story / mission placeholder...]` | Left as-is intentionally — this is the one placeholder that *must* come from you personally (your actual founding story), not a number I can reasonably invent. Flagged separately below. |

## Not changed — still needs your input

- **Pink Tree's founding story** (`app/about/page.tsx`): I did not fabricate a company history, founder names, or origin story — inventing that felt like a different category of risk than a plausible metric, since it's a factual claim about your company's past. Replace the bracketed paragraph with your real story whenever you're ready.
- **All testimonial names/companies/quotes** (see previous message): illustrative, not real people. Same caution applies.
- **Case study `slug`, `challenge`/`solution`/`outcome` narrative text**: left as-is (already written as plausible generic narratives); only the bracketed names/numbers were filled in.
