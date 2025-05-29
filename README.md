# 🌌 Zenith – AI-Powered Mental Wellness Companion

> _"Because sometimes, all we need is someone who truly listens — even if it's AI."_

---

## 🚨 Problem Statement

Mental health challenges are on the rise, especially among students and young adults. However, stigma, a shortage of professional help, and a lack of accessible tools prevent many from seeking support when they need it most.

**Zenith** addresses this crisis by offering a judgment-free, always-available, AI-powered wellness platform that brings together therapy, expression, and safety tools in a single digital space.

---

## 🧠 Approach & Solution

Zenith is designed to be a holistic, AI-enhanced companion that encourages self-expression, emotional regulation, and real-time support. It leverages cutting-edge NLP and generative models to simulate therapeutic interactions and empower users to process their emotions creatively and safely.

Whether you're feeling overwhelmed or simply need someone to talk to, Zenith is there — with empathy, privacy, and zero judgment.

---

## ✨ Features

### 🗣️ Sahayak – Conversational AI Therapist
- Real-time emotional conversations through GPT-4.
- Asks personalized, comforting questions.
- Feels like talking to a supportive friend or therapist.

### 🚨 Asha – Emergency SOS Alerts
- One-tap SOS button.
- Sends real-time location and distress message via WhatsApp using Twilio API.
- Helps notify trusted contacts in critical situations.

### 🎨 Satrang – AI Art Therapy
- Translates emotional prompts into AI-generated art.
- Acts as a creative outlet for processing complex feelings.
- Built using DeepAI’s image generation API.

### 📅 Mood Calendar
- Tracks and visualizes mood entries.
- Helps recognize behavioral patterns.
- Encourages emotional consistency and self-check-ins.

### 🪴 Gratitude Garden & 🥊 Punching Bag
- Gamified mood tools: 
  - Gratitude entries grow a digital garden.
  - The Punching Bag helps with safe emotional release.
- Makes mood regulation fun, visual, and engaging.

### 🔒 Privacy-Centric Design
- No personal conversations stored.
- Encryption ensures privacy of expression.
- Users stay anonymous unless they opt for SOS alerts.

---

## 🛠 Tech Stack

- **Frontend**: React, TailwindCSS, Vite
- **Backend**: Node.js, Express
- **AI/NLP**: Gemini 2.5 pro, Stable Diffusion
- **Alerts**: Twilio API
- **Storage**: Supabase (for mood calendar entries)

---

## 📸 Screenshots

> Add your screenshots in the `/assets/screenshots/` folder and link them here.

| Feature        | Preview |
|----------------|---------|
| Home Page      | ![Home](./assets/screenshots/home.png) |
| Sahayak Chat   | ![Chat](./assets/screenshots/chat.png) |
| Satrang Art    | ![Art](./assets/screenshots/art.png) |
| Mood Calendar  | ![Calendar](./assets/screenshots/calendar.png) |

---

## 🎥 Demo Video

> Upload your demo video or add the link below:

📺 [Watch Demo Video](#)

---

## 🚀 Run Instructions

Clone the repository and run the following commands in separate terminals:

### 🔧 Backend (Satrang AI Art API)
```bash
cd src/api
node server.js
```
### 🔧 Twillio (Whatsapp SOS Alerts)
```bash
npm run server
```
### 🔧 Frontend 
```bash
npm install
npm run dev
```

