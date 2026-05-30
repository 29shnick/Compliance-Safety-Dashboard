# Compliance Safety Dashboard 🛡️

<div align="center">

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/29shnick/Compliance-Safety-Dashboard?style=flat-square&color=blue)](https://github.com/29shnick/Compliance-Safety-Dashboard/releases)
[![GitHub last commit](https://img.shields.io/github/last-commit/29shnick/Compliance-Safety-Dashboard?style=flat-square&color=green)](https://github.com/29shnick/Compliance-Safety-Dashboard/commits/main)
[![GitHub open issues](https://img.shields.io/github/issues/29shnick/Compliance-Safety-Dashboard?style=flat-square&color=orange)](https://github.com/29shnick/Compliance-Safety-Dashboard/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

<br />

[![GitHub Codespaces](https://img.shields.io/badge/GitHub%20Codespaces-Compatible-2ea44f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/codespaces)
[![Security: Server-Side](https://img.shields.io/badge/Security-Server--Side%20Keys-blueviolet?style=for-the-badge&logo=dependabot&logoColor=white)](#-security-architecture)

</div>

---

## 📋 Overview

The **Compliance Safety Dashboard** is a secure, enterprise-ready application designed to monitor and manage organizational compliance metrics. Built with environment portability and strict security protocols in mind, this project isolates sensitive API operations server-side to prevent client-side exposure.

# 🛡️ Compliance & Safety Dashboard

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-8E75B2?style=for-the-badge&logo=google&logoColor=white)

An AI-powered risk analysis dashboard designed to automate compliance auditing and identify safety hazards using the Google Gemini API. Built securely with the Next.js App Router.

## ✨ Features

* **Automated Risk Analysis:** Instantly scans organizational safety logs to flag violations.
* **AI-Generated Insights:** Leverages Gemini 1.5 Flash to summarize actionable recommendations.
* **Modern UI:** Clean, responsive interface built with Tailwind CSS and Lucide Icons.
* **Secure Backend:** API keys are safely hidden server-side using Next.js Route Handlers.
  
## 🔒 Security Architecture

To protect sensitive data and prevent unauthorized API consumption, this dashboard enforces a strict separation of concerns:

* **Server-Side Key Isolation:** All third-party API keys and compliance validation tokens are strictly confined to the backend environment variables (`.env`).
* **Zero Client Exposure:** The frontend never makes direct calls to external compliance APIs. Instead, it routes requests through our secure backend proxy controllers.
* **Payload Sanitation:** Incoming data is validated and sanitized server-side before being rendered on the dashboard to mitigate XSS vulnerabilities.
## 💻 Development & Environment Portability

This project is fully optimized for **GitHub Codespaces**. You can spin up a complete, isolated development environment in the cloud without installing dependencies locally.

### Quick Start with Codespaces
1. Click the **Code** button on this repository.
2. Select the **Codespaces** tab.
3. Click **Create codespace on main**.
4. Once the container builds, create a `.env` file in the root directory using `.env.example` as a template, then run:
   ```bash
   npm install  # Or your specific package manager command
   npm start

### Prerequisites
Make sure you have Node.js installed and a valid Google Gemini API key.

### Installation

1. **Clone the repository:**
```bash
   git clone [https://github.com/29shnick/Compliance-Safety-Dashboard.git](https://github.com/29shnick/Compliance-Safety-Dashboard.git)
   cd Compliance-Safety-Dashboard
