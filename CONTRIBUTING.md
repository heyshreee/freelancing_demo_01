# Contributing to Freelancing Demo 01

First off, thank you for taking the time to contribute! ❤️

These are guidelines for contributing to **Freelancing Demo 01**. They are mostly guidelines, not rules — use your best judgment and feel free to propose changes to this document in a pull request.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What Should I Know Before Getting Started?](#what-should-i-know-before-getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Contribution](#your-first-contribution)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Testing Checklist](#testing-checklist)
- [Code Style & Conventions](#code-style--conventions)
- [Commit Guidelines](#commit-guidelines)

---

## Code of Conduct

This project and everyone participating in it is governed by a simple code of conduct: be respectful, be constructive, and assume good faith. Unacceptable behavior can be reported to the maintainers.

---

## What Should I Know Before Getting Started?

This is a **static frontend demo** built with:

- **HTML5** — semantic, accessible page structure.
- **CSS3** — custom styling and responsive layouts.
- **JavaScript** — interactivity and dynamic behavior.
- **GSAP + ScrollTrigger** — scroll-driven and hover animations.

There is **no build step**. The site runs directly in the browser by opening `index.html`.

---

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:

1. Search the [issues](../../issues) to see if it was already reported.
2. Confirm you are using the latest version of the code.

When reporting, include:

- A clear, descriptive title.
- Steps to reproduce the issue.
- Expected vs. actual behavior.
- Browser and OS versions.
- Screenshots or a short recording, if possible.

### Suggesting Enhancements

Suggestions are welcome. When suggesting an improvement, describe:

- The problem you want to solve.
- Your proposed solution.
- Any alternatives you considered.
- Why it would benefit the project.

### Your First Contribution

Not sure where to start? Look for issues labeled `good first issue` or `help wanted`.

### Pull Requests

How to submit a pull request:

1. **Fork** the repository and create your branch from `main`.
2. **Clone** your fork locally.
3. Create a descriptive feature branch.
4. Make your changes.
5. Test by opening `index.html` in a browser.
6. Commit following the [commit guidelines](#commit-guidelines).
7. Push and open a pull request.
8. Describe your changes clearly and reference any related issue.

The maintainers will review as soon as possible — please keep an eye out for feedback.

---

## Development Setup

```bash
# 1. Clone your fork
git clone https://github.com/heyshreee/freelancing_demo_01.git
cd freelancing_demo_01

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Open the project
# Simply open index.html in your browser
```

> 💡 **Tip:** Use the **Live Server** extension in VS Code for auto-reload.

---

## Testing Checklist

Before submitting, verify that:

- [ ] The page loads without console errors.
- [ ] GSAP animations play correctly on scroll and hover.
- [ ] Horizontal scroll works on desktop (`min-width: 768px`).
- [ ] Panels stack vertically on mobile (`max-width: 767px`).
- [ ] The mobile navigation menu opens and closes correctly.
- [ ] The layout is responsive across screen sizes.
- [ ] The interactive grid playground responds to the mouse.

---

## Code Style & Conventions

- Keep changes **focused and minimal** — avoid unrelated refactors.
- Follow the existing structure and naming conventions.
- Keep the UI **responsive** — new elements must work on mobile and desktop.
- Preserve consistent formatting and indentation.
- Avoid adding new dependencies unless necessary.
- Update `README.md` and `CONTRIBUTING.md` when behavior or structure changes.
- **Never commit** passwords, API keys, tokens, or other sensitive data.

---

## Commit Guidelines

Write clear, descriptive commit messages:

```text
type(scope): short summary
```

Examples:

```text
feat(playground): add grid hover interaction
fix(animations): correct panel stagger timing on mobile
style(nav): improve mobile menu transition
docs(readme): add live demo link
```

Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`, `perf`.

---

⭐ If you find this project useful, consider starring the repository.

Thanks again for contributing! 🎉