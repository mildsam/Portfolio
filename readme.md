# SamTheMajestic | Personal Portfolio Website

This repository contains the source code for the personal portfolio website of **Samuel Idakwo** ("SamTheMajestic"). It is a responsive, single-page portfolio designed to showcase frontend development skills, UI/UX projects, and technical services.

## 📖 Overview

The website is built as a lightweight, static site that relies on CDN connections for styling and icons, requiring no complex build steps. It features a modern, minimalist design with a sidebar navigation layout for desktop and a collapsible menu for mobile devices.

## ✨ Key Features

* **Responsive Design:** Fully fluid layout that adapts from mobile screens to large desktops using Tailwind CSS breakpoints.
* **Dark/Light Mode:** A specialized theme toggle that persists user preference via `localStorage`. It switches between a "Light Slate" theme and a "Dark Gray/Navy" theme.
* **Project Filtering:** A JavaScript-based filtering system allows visitors to sort projects by categories (Web Design, Applications, Graphic Design) without reloading the page.
* **Interactive Contact Form:** Integrated with **Formspree** to handle email submissions. Includes a custom loading state and a "Toast" notification upon success.
* **Smooth Animations:** Utilizes custom CSS keyframes (`fade-in-up`) and smooth scrolling for navigation links.
* **Custom Tailwind Configuration:** Overrides default Tailwind colors to use a specific brand palette:
    * **Primary:** Modern Blue (`#3B82F6`)
    * **Accent:** Vibrant Teal (`#06B6D4`).

## 🛠️ Tech Stack

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN) with custom configuration injected via script.
* **Icons:** [FontAwesome 6.4.0](https://fontawesome.com/).
* **Fonts:** [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts).
* **Backend Service:** [Formspree](https://formspree.io/) (for contact form handling).

## 📂 Folder Structure

Based on the file paths referenced in the code, the project folder is structured as follows:

```text
/
├── index.html
├── assets/
│   ├── images/
│   │   ├── download (1).jpeg      (Profile Picture)
│   │   ├── phishingDetector.png   (Project Screenshot)
│   │   ├── edubot.png             (Project Screenshot)
│   │   ├── e-commerceProject.png  (Project Screenshot)
│   │   └── dashboard.png          (Project Screenshot)
│   └── resume.pdf                 (Downloadable CV)
└── public/
    ├── terms.html
    └── privacy.html