# M3 Security Model

## 1. Project Overview

M3 is an educational project focused on password memorability,
password predictability and secure authentication practices.

## 2. Application Architecture

- Static HTML frontend (`index.html`)
- CSS styling (`css/style.css`)
- Vanilla JavaScript (`js/app.js`), no frameworks or dependencies
- No backend server
- No database
- No user authentication

## 3. Implemented Features and Data Handling

### Mnemonic Learning Engine (Phase 4.1)

Users choose one of three predefined fictional phrases. The page
shows the first letter of each word as a mnemonic pattern, followed
by a warning that memorable patterns can still be predictable.

### Password Predictability Awareness Engine (Phase 4.2)

Users choose one of four predefined scenarios (familiar phrases,
predictable additions, common substitutions, password reuse). The
page shows a fixed explanation and a safer-practice recommendation.

### Data handling for both features

- Input comes only from `<select>` dropdowns with fixed values.
  There are no text fields, so users cannot type a password.
- Lesson content is hardcoded in `js/app.js`.
- Results are written with `textContent`, never `innerHTML`, so
  content is always treated as plain text and cannot inject HTML or
  scripts.

## 4. Security Principles

- No password collection
- No password storage
- No credential transmission
- No browser storage or cookies
- No unnecessary external dependencies
- No hardcoded credentials or API secrets
- No password-strength scores presented as precise security measures

## 5. Limitations

M3 is an educational application.

It does not provide password strength certification, password
management, breach checking or authentication services.

## 6. Future Security Review

Future functionality must undergo privacy and security review before
implementation. Possible hardening for public deployment includes a
Content Security Policy that restricts scripts and styles to the
site's own origin.
