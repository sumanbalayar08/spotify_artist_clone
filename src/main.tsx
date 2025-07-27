import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider } from './context/SidebarContext.tsx'
import { SearchProvider } from './context/SearchContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </SidebarProvider>
  </StrictMode>,
)
