# 🏎️ CarZone — Visual Confusion Edition

<div align="center">

### 🥈 RUNNER UP — Beyond The Code | Coder's Club
### A.P. Shah Institute of Technology | Department of Computer Engineering

**Team Name: Zero One**

[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 🎥 Demo Video

🎬 **Watch the full working demo here:**

https://drive.google.com/file/d/1pCQHbOAtWCXgIAKrxYbEEZzz8QqxfS4E/view?usp=drive_link

---

## 🏆 Certificate & Achievement

![Certificate](assets/results/certificate.png)

| Detail | Info |
|--------|------|
| 🎯 Event | **Beyond The Code** |
| 🏛️ Organized by | **Coder's Club — APSH** |
| 🥈 Result | **Runner Up** |
| 💰 Prize | **₹1,000** |
| 👥 Team | **Zero One** |
| 📅 Year | **2025** |

---

## 📋 Contest Structure

### 🔵 Round 1 — DSA & Python Quiz

![Round 1 Result](assets/round1/round1-result.png)

> Online quiz — DSA, Python, AOA ke questions. No internet, no resources — pure knowledge!

| Metric | Score |
|--------|-------|
| 🎯 Total Score | **13,340** |
| ✅ Correct | **17 / 25** |
| ❌ Incorrect | 5 |
| ⏱️ Avg Time | 36s / question |
| 📊 Accuracy | **68%** |

**Topics Covered:**
- 🐍 Python — Output guessing, recursion, list comprehension, code tracing
- 📚 DSA — Queue, Stack, BST, Binary Search, Circular Queue
- 🧠 AOA — Merge Sort (Divide & Conquer), Bit manipulation (Power of 2)

**Sample Questions:**
```
Q: In a circular queue of size n, queue is full when?
   ✅ (rear + 1) % n == front

Q: arr = [1,2,3,4] → product of all others = [24,12,8,6]. Approach?
   ✅ Prefix product and suffix product arrays

Q: Which traversal gives sorted output in a BST?
   ✅ Inorder

Q: Which technique is used in Merge Sort?
   ✅ Divide and Conquer

Q: Which condition checks if n is power of 2?
   ✅ n & (n-1) == 0

Q: Which data structure removes elements in same order added?
   ✅ Queue

Q: What happens if target not found in Binary Search?
   ✅ Returns -1 / invalid index
```

---

### 🔴 Round 2 — Phase 1: Ideation (Pen & Paper, No Internet!)

> Bina internet, bina resources — sirf dimaag aur pen-paper se poora design socha!

**Handwritten Ideation — Team Zero One:**

![Ideation Page 1](assets/ideation/ideation-page1.png)

![Ideation Page 2](assets/ideation/ideation-page2.png)

**What we planned vs what we built:**

| ✍️ Planned on Paper | ✅ Built in Code |
|---------------------|-----------------|
| Upside-down website | ✅ Full RTL + upside down |
| Switch username & password fields | ✅ Done |
| Ask phone if email entered | ✅ Done |
| Login button moves away on hover | ✅ Moves 3 times before clickable! |
| Content reads right to left | ✅ Full RTL layout |
| Blast animation on Save Progress | ✅ Full screen explosion with fire & smoke! |
| Redirect to Tic-Tac-Toe on link click | ✅ Done |
| Random GIF on car detail click | ✅ Done |
| Car showcase with specs & showroom price | ✅ 8 luxury brands with full specs |
| Redirecting link to official car website | ✅ Done |

---

## ✨ Features

- **8 Real Car Brands** — Ferrari, Lamborghini, Porsche, McLaren, Aston Martin, BMW, Mercedes-Benz, Bugatti with real images
- **Dodging Login Button** — The login button moves away 3 times on hover before you can click it
- **GIF Surprise** — Clicking any car card replaces the image with a random funny GIF
- **Whack-a-Mole** — Clicking the search button forces the user to play whack-a-mole
- **Tic-Tac-Toe** — Clicking nav links triggers a tic-tac-toe game
- **Realistic Blast** — "Save Progress" triggers a full-screen explosion with screen shake, cracks, debris, smoke, and fire
- **Bootstrap Elements** — Badges, ProgressBar, Spinner, Breadcrumb, Alert components
- **Everything is upside-down and RTL** — Maximum confusion!

---

## 🎮 App Screenshots

### 1. 🔐 Login Page — Upside Down!

![Login](assets/screenshots/login.png)

> Password aur Username fields swap hain. Button hover pe bhaagta hai — 3 baar bhaagne ke baad hi click hota hai! 😈

---

### 2. 🏎️ Luxury Car Showcase

![Car Grid](assets/screenshots/car-grid.png)

> 8 real luxury brands — Bugatti, Mercedes-Benz, Ferrari, Lamborghini, McLaren aur aur bhi. Saari specs ulti likhi hain!

---

### 3. 🎯 Hero Section

![Hero](assets/screenshots/hero.png)

> Ferrari ki real photo upside-down ke saath — ekdum filmy style mein!

---

### 4. 🚗 Car Detail Modal + GIF Surprise

![Car Modal](assets/screenshots/car-modal.png)

> Kisi bhi car pe click karo — pehle funny GIF aata hai, phir full car detail with specs!

---

### 5. ❌⭕ Tic-Tac-Toe Mini Game

![Tic Tac Toe](assets/screenshots/tic-tac-toe.png)

> Nav link click karo — seedha Tic-Tac-Toe game shuru ho jaata hai! Jeeto tabhi aage jao. 🎮

---

### 6. 💥 Realistic Explosion Effect

![Explosion](assets/screenshots/explosion.png)

> "SAVE PROGRESS" click karo — BOOM! Full screen blast with screen shake, cracks, fire, smoke! 🔥

---

## 📁 Project Structure

```
carzone-project/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── assets/
│   ├── screenshots/        # App screenshots
│   ├── ideation/           # Pen-paper design docs
│   ├── results/            # Certificate
│   └── round1/             # Round 1 quiz result
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── LoginPage.tsx
│   │   ├── MainPage.tsx
│   │   ├── CarModal.tsx
│   │   ├── TicTacToe.tsx
│   │   ├── WhackAMole.tsx
│   │   ├── BlastOverlay.tsx
│   │   └── ui/
│   ├── data/
│   │   └── cars.ts
│   ├── lib/
│   │   └── utils.ts
│   └── hooks/
└── public/
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ React 18 | UI Framework |
| 📘 TypeScript 5 | Type Safety |
| ⚡ Vite 5 | Build Tool & Dev Server |
| 🎨 Tailwind CSS 3 | Utility-first CSS |
| 🧩 shadcn/ui | UI Component Library |
| 🅱️ React Bootstrap | Badge, Spinner, ProgressBar etc |
| 🔀 React Router DOM | Client-side Routing |
| 🎯 Lucide React | Icons |

---

## 📝 Design System

All colors defined as HSL CSS variables in `src/index.css`:
- `--red`: Accent red (#ff2d2d)
- `--yellow`: Primary yellow (#ffe600)
- `--background`: Dark bg (#0a0a0a)
- `--surface`: Card surfaces (#1a1a1a)

Fonts: **Bebas Neue** (headings) + **Space Mono** (body)

---

## 🚀 How to Run

```bash
# 1. Clone the repo
git clone https://github.com/arju8400/Carzone.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser at localhost:8080
```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

---

## 🎮 User Flow

```
1. 🔐 Login Page (upside-down)
   └── Hover button 3 times → then click!

2. 🌀 RTL Transition
   └── Dramatic red overlay effect

3. 🏎️ Main Page (upside-down, RTL)
   ├── Click "HCRAES"          → Whack-a-Mole 🔨
   ├── Click Nav Links         → Tic-Tac-Toe ❌⭕
   ├── Click any Car Card      → GIF Surprise + Detail 🎉
   └── Click "SSERGORP EVAS"  → MASSIVE EXPLOSION 💥
```

---

## 💭 Thought Process

> *"We wanted to build something that looked completely wrong but worked perfectly. Every UI rule was broken intentionally — upside down layout, RTL text, disappearing buttons, mini-games as interruptions, and a dramatic explosion instead of saving. The judges loved the creativity!"*

---

## 📄 License

Educational use — Team Zero One © 2025

---

<div align="center">

**⭐ Agar acha laga toh Star zaroor karo! ⭐**

🏆 Runner Up | Beyond The Code | Coder's Club | APSH 2025

Made with 💛 chaos, creativity & zero internet! 😈

</div>
