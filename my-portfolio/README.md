# Payal Kumari Portfolio

A personal portfolio website built with React and Vite to showcase Payal Kumari's profile, projects, research interests, skills, and contact information.

## Overview

This website presents:

- A landing page with a profile snapshot and direct downloads for resume and CV
- An About page focused on cyber security, digital forensics, and research interests
- A Projects page featuring software and security-focused work
- A Skills page highlighting technical strengths across development, security, and tools
- A Contact page with email, LinkedIn, GitHub, and location details

The site is designed to work across desktop, tablet, and mobile screen sizes.

## Tech Stack

- React
- Vite
- React Router
- React Icons
- CSS

## Key Features

- Multi-page portfolio navigation with client-side routing
- Responsive layout for desktop and mobile devices
- Animated hero section and polished card-based UI
- Project and research showcase with interactive details
- Download buttons for `Payal_Kumari_Resume.pdf` and `Payal_Kumari_CV.pdf`

## Project Structure

```text
my-portfolio/
├── public/
│   ├── Payal_Kumari_CV.pdf
│   ├── Payal_Kumari_Resume.pdf
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── SkillsPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Current Pages

### Home

Introduces Payal Kumari as a pre-final year Computer Science and Engineering (Cyber Security) student at SVCE, Bangalore, with a focus on full stack development, machine learning, and digital forensics.

### About

Highlights internship experience at CID Karnataka, technical philosophy, core competencies, achievements, and academic information.

### Projects

Includes featured work such as:

- EduMatrix Portal
- Tic-Tac-Toe Arena
- Deepfake Detection For Multimedia
- Zero-Day Defender
- Malware Sandbox Analysis

### Skills

Covers:

- Software and backend engineering
- Cyber security and research
- Cloud, DevOps, and tools
- Frontend and design

### Contact

Provides ways to connect through:

- Email
- LinkedIn
- GitHub
- Resume and CV download links

## Notes

- Static files placed in `public/` are served directly by Vite
- Resume and CV downloads use the original PDF filenames
- Styling and responsiveness are handled through `App.css` and `index.css`
