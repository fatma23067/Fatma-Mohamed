# Fatma Mohamed: Portfolio

Bilingual (English / Arabic, RTL/LTR) portfolio built with plain HTML, CSS and JavaScript. No build step.

## Structure
```
index.html   page content (sections, English default text)
style.css    design
script.js    translations, skills, tools, academic projects, contact form
assets/      images/, icons/, documents/ (CV.pdf, salbutamol/)
```

## Run locally
Open `index.html` in a browser. For a closer-to-live test: `python3 -m http.server 8000`, then visit http://localhost:8000.

## Replace the CV
Put the PDF at `assets/documents/CV.pdf` (exact name). Both "Download CV" buttons already point there. Until then they will show "file not found".

## Add the Salbutamol research (needs her real file)
1. Copy the file to `assets/documents/salbutamol/salbutamol.pdf`.
2. In `script.js`, find `PROJECTS` and set `file: 'assets/documents/salbutamol/salbutamol.pdf'`.
3. Replace `summary` and `details` (both `en` and `ar`) with what the document actually says. Don't add findings the document doesn't contain.
The "placeholder" note disappears once `file` is set.

## Add a new academic project
Copy the object inside `PROJECTS` in `script.js`, change `id`, `file`, and the `en`/`ar` text. It appears automatically as a card with a details window. Certificates, internships, etc. can follow the same pattern: copy a section in `index.html` and add its text to `T` in `script.js`.

## Update personal information
- Text with a `data-i18n="key"` attribute: edit the matching key in `T.en` and `T.ar` in `script.js`.
- Email and LinkedIn: search `fatmamohamed230670` and `linkedin.com/in/` in `index.html` and `script.js`.
- Skills and tools: `SKILLS_PRO`, `SKILLS_INT`, `TOOLS` in `script.js`.
- Colors: variables at the top of `style.css`.

## Deploy on GitHub Pages (free)
1. Create a GitHub repository and upload all files (keep `index.html` at the root).
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. After a minute the site is live at `https://<username>.github.io/<repository>/`.

## Connect the contact form
The form only sends once connected; until then it tells visitors to email directly.
1. Create a free account at https://formspree.io and make a new form using `fatmamohamed230670@gmail.com`.
2. Copy the form ID (the part after `/f/`).
3. Replace `YOUR_FORM_ID` in **both** `index.html` (form `action`) and `script.js` (`FORM_ENDPOINT`).
4. Send a test message and confirm the first-time verification email from Formspree.
