# M3 Functional Test Plan

Covers M3 up to **Phase 4.2 — Password Predictability Awareness Engine**.

## How to read this document

- **Status values:** `Pass`, `Fail`, `Pending` (not yet verified), `Retired` (test no longer applies).
- A test is only marked `Pass` after it has actually been executed.
- **Last automated run:** 2026-11-27, headless Google Chrome, page loaded from
  `index.html`. A temporary harness (kept outside the repository) selected each
  option, clicked each button and read the resulting DOM. Viewport widths tested:
  1280px, 768px and ~485px (the minimum headless Chrome window width).
- **Manual checks** (visual layout, phone widths below 485px, real scrolling) must be
  performed by a person in a browser — see "Manual test procedure" below.

---

## 1. General page tests

| Test ID | Feature | Procedure | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| M3-001 | Homepage loading | Open `http://localhost:8000/` | Page loads with styles applied, no console errors | Page loaded, stylesheet applied, zero JavaScript errors | Pass |
| M3-002 | Home navigation | Click "Home" in the navigation bar | Page scrolls to the hero section | `#home` target exists; scroll not yet checked by hand | Pending |
| M3-003 | Learn navigation | Click "Learn" | Page scrolls to "Why do we struggle to remember passwords?" | `#learn` target exists; scroll not yet checked by hand | Pending |
| M3-004 | Security Lab navigation | Click "Security Lab" | Page scrolls to the Mnemonic Learning Engine | `#lab` target exists; scroll not yet checked by hand | Pending |
| M3-006 | Button disable functionality | — | — | Not implemented by design: users may run a lesson repeatedly (see M3-015, M3-026) | Retired |
| M3-007 | Best Practices navigation | Click "Best Practices" | Page scrolls to "Memorability is not enough" | `#practices` target exists; scroll not yet checked by hand | Pending |
| M3-008 | Responsive layout (tablet/desktop) | Load the page at 1280px, 768px and ~485px widths | No horizontal scrolling; no element wider than the viewport | No overflowing elements at any tested width | Pass |
| M3-008a | Responsive layout (phone) | Browser DevTools device mode at 375px and 320px | Navigation wraps, cards stack in one column, no horizontal scrolling | Not yet tested (below headless minimum width) | Pending |
| M3-009 | Browser refresh | Use both features, then refresh the page | Page reloads cleanly, results are hidden again, no errors | Not yet tested | Pending |
| M3-030 | HTML structure | Inspect `index.html` | Every section opened is closed; all sections are inside `<main>` | Stray `</section>` removed; DOM shows home, learn, lab, predictability, practices inside `<main>` | Pass |

## 2. Mnemonic Learning Engine — Phase 4.1

| Test ID | Feature | Procedure | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| M3-005 | Initial state | Load the page, do not interact | Mnemonic result area is hidden | `learningResult.hidden` was `true` | Pass |
| M3-010 | Phrase selection | Open "Sample phrase" dropdown | Three predefined fictional phrases are listed | Three phrases listed | Pass |
| M3-011 | Transform first phrase | Select "Every New Beginning Creates Another Opportunity", click "Explore the mnemonic" | Displays `ENBCAO`, result area visible | `ENBCAO`, result visible | Pass |
| M3-012 | Transform second phrase | Select "Knowledge Opens Doors To New Possibilities", click button | Displays `KODTNP` | `KODTNP` | Pass |
| M3-013 | Transform third phrase | Select "Small Steps Build Lasting Progress", click button | Displays `SSBLP` | `SSBLP` | Pass |
| M3-014 | Change phrase selection | Change the dropdown after a result is shown | New phrase can be selected | Selection changed for all three options | Pass |
| M3-015 | Repeat transformation | Transform one phrase, then another | Result updates to the new mnemonic | Result updated on each click | Pass |
| M3-016 | Security insight | Run any transformation | "Security insight" warning about predictability is shown | Shown inside the revealed result area | Pass |
| M3-017 | Privacy note | Read the card | Note states no real passwords should be entered | Privacy note present | Pass |

## 3. Password Predictability Awareness Engine — Phase 4.2

| Test ID | Feature | Procedure | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| M3-020 | Initial state | Load the page, do not interact | Security lesson area is hidden | `patternResult.hidden` was `true` | Pass |
| M3-021 | Familiar phrase lesson | Select "Familiar phrase or quotation", click "Explore the security lesson" | Title "Familiar phrases can be predictable", explanation and password-manager recommendation shown | Correct title, explanation and recommendation shown | Pass |
| M3-022 | Predictable addition lesson | Select "Predictable number or symbol addition", click button | Title "Predictable additions may not help much" | Correct title, explanation and recommendation shown | Pass |
| M3-023 | Substitution lesson | Select "Common character substitution", click button | Title "Common substitutions are familiar patterns" | Correct title, explanation and recommendation shown | Pass |
| M3-024 | Password reuse lesson | Select "Reusing a password across accounts", click button | Title "Password reuse creates shared risk", recommends unique password per account | Correct title, explanation and recommendation shown | Pass |
| M3-025 | Predictability navigation | Click "Predictability" in the navigation bar | Page scrolls to the Predictability section | `#predictability` target exists; scroll not yet checked by hand | Pending |
| M3-026 | Switching lessons | Show one lesson, then select another and click | Content is replaced by the new lesson | Content replaced on each click | Pass |
| M3-027 | Features are independent | Use the mnemonic engine, then the predictability engine | Mnemonic result is unchanged by predictability lessons | Mnemonic stayed `SSBLP` and visible after all four lessons | Pass |
| M3-028 | Privacy note | Read the card | Note states not to enter real passwords | Privacy note present | Pass |

## 4. Security and privacy tests

| Test ID | Check | Procedure | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| M3-S01 | No password collection | Inspect DOM for `input`, `textarea`, `form` | None present | 0 found | Pass |
| M3-S02 | No sensitive storage | Review `js/app.js` for storage APIs and cookies | No `localStorage`, `sessionStorage`, cookies or IndexedDB | None used | Pass |
| M3-S03 | No external requests | Review sources for external URLs, `fetch`, third-party scripts | Only local `css/style.css` and `js/app.js` load | Only local files referenced | Pass |
| M3-S04 | No exposed credentials | Review repository for keys or secrets | None present | None found | Pass |
| M3-S05 | No JavaScript errors | Use both features, check for errors | Zero errors | Zero errors captured during the run | Pass |
| M3-S06 | Safe output | Review how results are written to the page | `textContent` used, not `innerHTML` | Only `textContent` used | Pass |
| M3-S07 | No misleading security claims | Read all on-page text | No password-strength scores; memorability not presented as security | Content review found no strength scores or misleading claims | Pass |

---

## Manual test procedure

1. In a terminal, from the project folder, run: `python -m http.server 8000`
2. Open `http://localhost:8000/` in a browser.
3. Press **F12** and open the **Console** tab. It should show no red errors.
4. Work through each `Pending` test above and update the *Actual result* and *Status* columns.
5. For phone widths (M3-008a), press **Ctrl+Shift+M** in DevTools and choose 375px and 320px widths.
6. Stop the server with **Ctrl+C** when finished.
