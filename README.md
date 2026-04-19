# Flashy Cardy Course

A modern flashcard learning app built with Next.js, shadcn/ui, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Font:** [Poppins](https://fonts.google.com/specimen/Poppins) (via `next/font/google`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [tw-animate-css](https://github.com/jamiebuilds/tailwindcss-animate)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Adding shadcn/ui Components

This project uses shadcn/ui for all UI elements. To add a new component:

```bash
npx shadcn@latest add <component-name>
```

Components are installed to `src/components/ui/`.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with Poppins font
│   └── page.tsx         # Home page
├── components/
│   └── ui/              # shadcn/ui components
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```
