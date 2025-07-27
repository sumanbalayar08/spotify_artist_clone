# Spotify Artist App

A Spotify-style artist discovery platform built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Supabase**. Features smooth infinite scrolling, search with debounce, loading skeletons, and subtle animations using **Framer Motion**.

## 🚀 Features

- 🔍 Real-time artist search with debounce
- ♾️ Infinite scroll with IntersectionObserver
- 🎨 Beautiful UI with Tailwind CSS
- 🧱 Skeleton cards for loading state
- ✨ Smooth animations using Framer Motion
- 🌐 Data fetched from Supabase (PostgreSQL backend)
- ⚡ Blazing fast performance with Vite

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- Supabase account

## 🛠️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/sumanbalayar08/spotify_artist_clone
cd spotify_artist_clone
```

### 2. Configure environment variables

Create a `.env` file in the root directory and add your Supabase project credentials:

```ini
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Locally

```bash
npm run dev
```

### You can access project at http://localhost:5173