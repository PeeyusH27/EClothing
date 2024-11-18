import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const VITE_CLERK_PUBLISHABLE_KEY='pk_test_Z2l2aW5nLWNvd2JpcmQtNjYuY2xlcmsuYWNjb3VudHMuZGV2JA'
const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/login">
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
  </ClerkProvider>
)
