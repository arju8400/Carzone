# 🏎️ CarZone — Visual Confusion Edition

A chaotic, troll car showcase web app built with React + TypeScript + Vite + Tailwind CSS.

## ✨ Features

- **8 Real Car Brands** — Ferrari, Lamborghini, Porsche, McLaren, Aston Martin, BMW, Mercedes-Benz, Bugatti with real images
- **Dodging Login Button** — The login button moves away 3 times on hover before you can click it
- **GIF Surprise** — Clicking any car card replaces the image with a random funny GIF
- **Whack-a-Mole** — Clicking the search button forces the user to play whack-a-mole
- **Tic-Tac-Toe** — Clicking nav links triggers a tic-tac-toe game
- **Realistic Blast** — "Save Progress" triggers a full-screen explosion with screen shake, cracks, debris, smoke, and fire
- **Bootstrap Elements** — Badges, ProgressBar, Spinner, Breadcrumb, Alert components
- **Everything is upside-down and RTL** — Maximum confusion!

## 📁 Project Structure

```
carzone-project/
├── index.html              # Entry HTML
├── package.json            # Dependencies
├── vite.config.ts          # Vite config
├── tailwind.config.ts      # Tailwind + design system colors
├── tsconfig.json           # TypeScript config
├── postcss.config.js       # PostCSS
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Router setup
│   ├── index.css           # Design system (CSS variables, animations)
│   ├── pages/
│   │   ├── Index.tsx       # Main page controller (login → RTL → main)
│   │   └── NotFound.tsx    # 404 page
│   ├── components/
│   │   ├── LoginPage.tsx   # Login with dodging button
│   │   ├── MainPage.tsx    # Car grid, hero, nav, save button
│   │   ├── CarModal.tsx    # Car detail modal with GIF surprise
│   │   ├── TicTacToe.tsx   # Tic-tac-toe mini-game
│   │   ├── WhackAMole.tsx  # Whack-a-mole mini-game
│   │   ├── BlastOverlay.tsx# Realistic explosion effect
│   │   └── ui/             # shadcn/ui components
│   ├── data/
│   │   └── cars.ts         # Car data, images, GIF URLs
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn)
│   └── hooks/              # Custom hooks
└── public/                 # Static assets
```

## 🛠️ Tech Stack

| Technology        | Purpose                        |
|-------------------|--------------------------------|
| React 18          | UI framework                   |
| TypeScript 5      | Type safety                    |
| Vite 5            | Build tool & dev server        |
| Tailwind CSS 3    | Utility-first CSS              |
| shadcn/ui         | UI component library           |
| react-bootstrap   | Bootstrap components (Badge, etc.) |
| react-router-dom  | Client-side routing            |
| lucide-react      | Icons                          |
| framer-motion     | (available) Animations         |

## 🚀 How to Run

### Prerequisites
- **Node.js** >= 18
- **npm** or **bun** or **pnpm**

### Setup & Run

```bash
# 1. Navigate to project folder
cd carzone-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Serve it with any static file server.

### Run Tests

```bash
npm test
```

## 🎮 User Flow

1. **Login Page** (upside-down) → hover the button 3 times, then click
2. **RTL Transition** → dramatic red overlay
3. **Main Page** (upside-down, RTL text)
   - Click **HCRAES** → Whack-a-Mole game
   - Click **GOLATAC/ERAPMOC/SLAED** → Tic-Tac-Toe game
   - Click any **car card** → GIF surprise, then modal
   - Click **SSERGORP EVAS** → MASSIVE EXPLOSION 💥

## 📝 Design System

All colors are defined as HSL CSS variables in `src/index.css`:
- `--red`: Accent red (#ff2d2d)
- `--yellow`: Primary yellow (#ffe600)
- `--background`: Dark bg (#0a0a0a)
- `--surface`: Card surfaces (#1a1a1a)

Fonts: **Bebas Neue** (headings) + **Space Mono** (body)

## 📄 License

Educational use — Team 01 © 2025
