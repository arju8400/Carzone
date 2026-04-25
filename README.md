# 🏎️ CarZone — Visual Confusion Edition

<div align="center">

[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

**🥈 Runner Up — Beyond The Code | Coder's Club, A.P. Shah Institute of Technology**

*Built by Team Zero One — with zero internet, zero resources, pure chaos.*

## 🎥 Demo Video

🎬 **Watch the full working demo here:**
https://drive.google.com/file/d/1pCQHbOAtWCXgIAKrxYbEEZzz8QqxfS4E/view?usp=drive_link

</div>

---

## 🧠 What is CarZone?

CarZone is a **luxury car showcase website that intentionally breaks every UI/UX rule in existence** — and does it beautifully. It looks completely wrong but works perfectly.

Built for a hackathon where we had to design everything on paper first (no internet, no resources), then code it from scratch in a limited time window.

> *"What if a car website was designed by someone who genuinely hated its users?"*

---

## 🎮 Features — The Chaos in Detail

---

### 🔐 1. Login Page — Everything is Wrong

![Login Page](assets/screenshots/login.png)

The entire login page is **upside-down**. Every element. The layout. The text. All of it.

- **Swapped fields** — `USERNAME` and `PASSWORD` labels are intentionally flipped
- **Dodging login button** — Hovers away from your cursor. Moves **3 times** before finally allowing a click
- **Field bait-and-switch** — Enter an email? It asks for your phone number instead
- **RTL text** — All labels read right-to-left (`DROWSSAP`, `LIAME / EMANRESU`)
- **Yellow border** — The whole card is outlined in yellow to feel like a warning

---

### 🏎️ 2. Hero Section — Ferrari, Upside Down

![Hero Section](assets/screenshots/hero.png)

The hero section features a **real Ferrari SF90 image — rendered completely upside down** with RTL typography. The massive headline reads `FIND YOUR PERFECT RIDE` — but mirrored. Everything is deliberate.

- Full-width dramatic hero layout
- Upside-down car image with "LIVE SHOWROOM" badge
- Mirrored heading text in huge Bebas Neue font
- RTL tagline and subtext throughout

---

### 🏎️ 3. Luxury Car Grid — 8 Real Brands

![Car Grid](assets/screenshots/car-grid.png)

The main showcase features **8 real luxury car brands** with actual images, real specs, and showroom prices — all rendered **upside-down and right-to-left**.

| Brand | Model |
|-------|-------|
| 🔴 Ferrari | SF90 Stradale |
| 🟡 Lamborghini | Huracán EVO |
| 🔵 Porsche | 911 GT3 RS |
| 🟠 McLaren | 720S |
| 🟢 Aston Martin | DB12 |
| ⚫ Bugatti | Chiron |
| ⚪ Mercedes-Benz | GT AMG |
| 🔵 BMW | M8 Competition |

Each card shows: showroom price (CR format), top speed (KM/H), 0-100 time, horsepower, drive type, and engine spec — all mirrored.

---

### 😂 4. Car Detail Modal + GIF Surprise

![Car Modal](assets/screenshots/car-modal.png)

Click any car card and instead of going straight to specs, a **random funny GIF appears first** where the car image was — then the full detail modal opens showing complete specs and an official brand website link.

- Random GIF from a curated list replaces the car photo on click
- Modal slides in with full spec breakdown
- "VISIT OFFICIAL SITE →" button links to the real brand website
- All text in the modal is upside-down and RTL

---

### ❌⭕ 5. Tic-Tac-Toe — Triggered by Nav Links

![Tic Tac Toe](assets/screenshots/tic-tac-toe.png)

Click any navigation link and instead of navigating, a **full Tic-Tac-Toe game hijacks the screen**. Fully playable. You are `X`. Win (or skip with shame) to proceed.

- Header reads: `ESAELP TNEMOM ENO` — "One Moment Please" backwards
- Subtitle: `You clicked a link — please complete the game to continue`
- `SKIP (coward)` button available if you give up
- All UI text rendered RTL/mirrored

---

### 💥 6. Full-Screen Explosion — Triggered by Save

![Explosion](assets/screenshots/explosion.png)

The crown jewel. Click `SSERGORP EVAS` (Save Progress — backwards) and witness a full cinematic explosion:

- **Screen shake** — the viewport physically shakes
- **Fire animation** — rising red/orange flames from the bottom
- **Smoke overlay** — billowing dark clouds rising upward
- **Apocalyptic red sky** — entire background turns dark crimson
- **Data "cleared"** — because that's what explosions do

This plays *instead* of saving your progress.

---

### 🔨 7. Whack-a-Mole — Triggered by Search

Click `HCRAES` (the Search button — written backwards) and instead of a search bar, you're forced to **play Whack-a-Mole** before you can continue. No skipping.

---

## 📋 From Paper to Code — Ideation Process

Everything was designed on paper first, with **no internet and no resources** allowed in Round 2 Phase 1.

**Page 1 — Core Confusion Features:**

![Ideation Page 1](assets/ideation/ideation-page1.png)

**Page 2 — Car Showcase Design:**

![Ideation Page 2](assets/ideation/ideation-page2.png)

**What we planned vs what we built:**

| ✍️ Planned on Paper | ✅ Built in Code |
|---------------------|-----------------|
| Upside-down website | ✅ Full RTL + upside-down layout |
| Switch username & password fields | ✅ Done |
| Ask phone number if email entered | ✅ Done |
| Login button moves away on hover | ✅ Moves 3 times before clickable |
| Content reads right to left | ✅ Full RTL throughout |
| Blast animation on Save Progress | ✅ Full screen fire, smoke, shake |
| Redirect to Tic-Tac-Toe on link click | ✅ Done |
| Random GIF on car detail click | ✅ Done |
| Car showcase with specs & showroom price | ✅ 8 brands with full specs |
| Redirecting link to official car website | ✅ Done |

**10 out of 10 planned features shipped. Zero internet. Zero resources.**

---

## 🗺️ User Flow

```
Login Page (upside-down)
   └── Hover button 3× → finally clickable
         │
         ▼ [Red overlay transition]
         │
Main Page (upside-down + RTL)
   ├── Click "HCRAES" (Search)     ──► Whack-a-Mole 🔨
   ├── Click Nav Link              ──► Tic-Tac-Toe ❌⭕  (win to close)
   ├── Click any Car Card          ──► GIF Surprise → Spec Modal 🎉
   │                                    └── Link to official brand site
   └── Click "SSERGORP EVAS"       ──► FULL SCREEN EXPLOSION 💥
       (Save Progress — backwards)
```

---

## 📐 Technical Architecture

```
carzone-project/
├── src/
│   ├── pages/
│   │   ├── Index.tsx          # Root, manages global state & transitions
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── LoginPage.tsx      # Upside-down login + dodging button logic
│   │   ├── MainPage.tsx       # RTL car showcase, hero, search trigger
│   │   ├── CarModal.tsx       # GIF surprise + spec detail modal
│   │   ├── TicTacToe.tsx      # Fully playable tic-tac-toe game
│   │   ├── WhackAMole.tsx     # Whack-a-mole minigame
│   │   ├── BlastOverlay.tsx   # Explosion with fire, smoke, screen shake
│   │   └── ui/                # shadcn/ui base components
│   ├── data/
│   │   └── cars.ts            # Car brands, specs, images, official URLs
│   └── hooks/
└── assets/
    ├── screenshots/
    ├── ideation/
    ├── results/
    └── round1/
```

### Dodging Button Logic

```tsx
const [dodgeCount, setDodgeCount] = useState(0);
const [position, setPosition] = useState({ x: 0, y: 0 });

const handleHover = () => {
  if (dodgeCount < 3) {
    const angle = Math.random() * 2 * Math.PI;
    setPosition({
      x: Math.cos(angle) * 120,
      y: Math.sin(angle) * 60,
    });
    setDodgeCount(prev => prev + 1);
  }
  // After 3 dodges: button stays put, becomes clickable
};
```

### Car Data Structure

```ts
interface Car {
  brand: string;
  model: string;
  price: string;
  specs: {
    horsepower: number;
    zeroToHundred: string;
    topSpeed: string;
    engine: string;
    drive: string;
  };
  image: string;
  officialUrl: string;
  description: string;
}
```

---

## 🎨 Design System

| Variable | Value | Usage |
|----------|-------|-------|
| `--red` | `#ff2d2d` | Accent, explosion, alerts |
| `--yellow` | `#ffe600` | Primary highlight, specs |
| `--background` | `#0a0a0a` | Dark base |
| `--surface` | `#1a1a1a` | Cards, modals |

**Typography:** `Bebas Neue` (headings) + `Space Mono` (body/specs)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ React 18 | UI framework |
| 📘 TypeScript 5 | Type safety |
| ⚡ Vite 5 | Build tool (port 8080) |
| 🎨 Tailwind CSS 3 | Utility-first styling |
| 🧩 shadcn/ui | Base components |
| 🅱️ React Bootstrap | Badge, Spinner, ProgressBar, Alert |
| 🔀 React Router DOM | Client-side routing |
| 🎯 Lucide React | Icons |

---

## 🚀 Getting Started

```bash
git clone https://github.com/arju8400/Carzone.git
cd Carzone
npm install
npm run dev
# Opens at http://localhost:8080
```

```bash
npm run build   # Production build
npm test        # Run tests
```

---

## 🏆 Achievement

![Certificate](assets/results/certificate.png)

> 🥈 **Runner Up** — Beyond The Code | Coder's Club, APSH 2025 | Team: Zero One (Arju & Shreya) | Prize: ₹1,000

**Round 1 — DSA & Python Quiz Result:**

![Round 1 Result](assets/round1/round1-result.png)

Score: **13,340** | Accuracy: **68%** | **17/25 correct** | Avg: 36s/question

---

## 💭 Design Philosophy

> *"We wanted to build something that looked completely wrong but worked perfectly. Every UI rule was broken intentionally — upside down layout, RTL text, disappearing buttons, mini-games as interruptions, and a dramatic explosion instead of saving. The core idea: user frustration as the feature."*

The challenge wasn't just making things weird — it was making the weird things feel **intentional and polished**. The explosion had to feel cinematic. The dodging button had to feel mischievous, not broken. The games had to actually be playable.

---

## 📄 License

Educational use — Team Zero One © 2025

---

<div align="center">

*Made with 💛 chaos, creativity & zero internet*

⭐ Star this repo if it made you smile!

</div>
