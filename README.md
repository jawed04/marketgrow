# MarketGrow 🚀
MarketGrow Overview

**MarketGrow** is a comprehensive digital platform designed to help small business owners, entrepreneurs, and local service providers scale their operations effectively. It bridges the gap between high-level digital marketing strategies and daily execution by providing structured learning tracks, automated growth playbooks, and localized marketing tools.

Core Value Propositions
Guided Business Scaling: Offers actionable, step-by-step playbooks to transition local businesses into predictable revenue generators.

Integrated Learning Hub: Features tailored learning tracks that allow users to master digital marketing, local SEO, and customer retention strategies at their own pace.

Built-in Growth Tools: Provides native software features designed to optimize Google Business profiles, track conversion metrics, and manage local search visibility.

Seamless User Experience: Built on a modern React and Material UI stack, ensuring high performance, intuitive navigation, and multi-device responsiveness across both marketing pages and protected application dashboards.

---

## 📸 Key Features

- **Authentication System:** Secure registration and login workflows with real-time password complexity validation (uppercase, lowercase, numbers, special characters, and minimum length).
- **Layout Architecture:** Dedicated layout wrappers (`MainLayout` and `DashboardLayout`) for seamless UI routing and state isolation.
- **Interactive Learning Hub & Dashboard:** Protected pages with route guards to track learning progress across business growth tracks.
- **Comprehensive Marketing Pages:** Built-in views for digital marketing, growth strategies, local SEO tools, and legal compliance (Terms, Privacy, Cookies).
- **Modern UI Design:** Accessible, high-end design built using Material UI (MUI v6) with responsive grid layouts, polished typography, and smooth page scrolling.

---

## 🛠️ Tech Stack

- **Build Tool:** Vite
- **Frontend Framework:** React.js
- **Routing:** React Router DOM (v6)
- **UI & Icons:** Material UI (MUI v6), `@mui/icons-material`
- **State & Context:** React Context API (`AuthContext`)
- **Styling:** Emotion CSS / MUI `sx` prop engine

---

## 📁 Project Structure


marketgrow/
├── public/
├── src/
│   ├── assets/
│   │   └── marketgrow.png
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── layouts/
│   │   ├── DashboardLayout.jsx
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Dashboard/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Cookies.jsx
│   │   ├── DigitalMarketing.jsx
│   │   ├── Home.jsx
│   │   ├── LearningHub.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SmallBusiness.jsx
│   │   ├── Strategies.jsx
│   │   ├── TermsOfService.jsx
│   │   └── Tools.jsx
│   ├── theme/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js

🚀 Getting Started
Follow these steps to run the project locally on your machine.

Prerequisites
Ensure you have the following installed:

Node.js (v18.x or higher recommended)

npm (v9.x or higher)

Installation & Execution
<br/>
**1.Clone the repository:**
<br/>
git clone [https://github.com/your-username/marketgrow.git](https://github.com/your-username/marketgrow.git)
cd marketgrow
<br/>
**2.Install dependencies:**

npm install
**3.Start the Vite development server:**
<br/>
npm run dev
<br/>
**4.Open your browser and navigate to http://localhost:5173.**
<br/>
🔒 Password Validation Rules
The registration flow (src/pages/Auth/Register.jsx) enforces the following real-time security criteria:

[x] Minimum 8 characters

[x] At least one uppercase letter (A-Z)

[x] At least one lowercase letter (a-z)

[x] At least one number (0-9)

[x] At least one special character (!@#$%^&*...)

📄 License
This project is licensed under the MIT License.