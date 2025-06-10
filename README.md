# Surveillance System Web App

A modern, platform-independent surveillance system that lets you turn any camera-enabled device into a smart, cloud-connected CCTV.  
Manage devices, view live feeds, and access recordings from anywhere in the world.

---

## 🚀 Features

- **User Dashboard:** Manage your devices, subscription, and recordings in one place.
- **Device Integration:** Connect any camera-enabled device (laptop, phone, IoT) for live video streaming.
- **Live Video:** View real-time feeds from all your devices, with camera selection and controls.
- **Recordings:** Access, organize, and play back videos with CCTV-like controls (play, pause, etc.).
- **Responsive UI:** Works seamlessly on desktop, tablet, and mobile.
- **Theme Support:** Switch between beautiful DaisyUI themes.

---

## 📸 Screenshots

### Dashboard  
![DashBoard on Desktop](https://github.com/user-attachments/assets/17d03238-17be-410a-a300-9c950ae6e939)

### Dashboard on Phone  
![DashBoard on Phone](https://github.com/user-attachments/assets/37bd5448-5e47-454e-bdfe-d9b7f5d6c487)

### Live Video  
![Live Feed from this Device](https://github.com/user-attachments/assets/f58277ab-9963-42b3-ab77-ddbf5696a219)

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Zustand, Lucide React (icons), React Router
- **State Management:** Zustand
- **Styling:** Tailwind CSS + DaisyUI
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** Custom Toast Context

---

## 📦 Installation

1. **Clone the repo:**

   Clone this repository to your local machine using the following command:

git clone https://github.com/yourusername/surveillance-system.git
cd surveillance-system


2. **Install dependencies:**

Install all required packages using npm:

npm install


3. **Start the dev server:**

Start the development server with:

npm run dev

or, if using Create React App:

npm start


---

## ⚙️ Configuration

- Edit `/src/constants.js` to change available themes.
- Update `/src/pages/Devices.jsx`, `/src/pages/Live.jsx`, etc., to connect with your backend/API.

---

## 🧑‍💻 Folder Structure

```plaintext
frontend/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── constants
    │   └── index.js
    ├── assets/
    │   └── (images and logos)
    ├── components/
    │   ├── Navbar.jsx
    │   ├── SubscriptionPlans.jsx
    ├── pages/
    │   ├── Dashboard.jsx
    │   ├── Devices.jsx
    │   ├── Live.jsx
    │   ├── Videos.jsx
    │   ├── Profile.jsx
    │   ├── Subscribe.jsx
    │   └── Settings.jsx
    └── store/
        └── useThemestore.js

```
---

## 📖 Usage

- **Add Devices:** Connect any device with a camera.
- **View Live:** See real-time video from your devices.
- **Recordings:** Access and manage saved videos.
- **Change Theme:** Go to Settings and pick your favorite look.

---

## 🙏 Credits

- [DaisyUI](https://daisyui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📄 License

MIT License

---
