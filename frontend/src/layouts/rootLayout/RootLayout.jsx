import React from 'react'
import "./rootLayout.css";
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/react.svg'
import { ClerkProvider, SignedIn, SignOutButton } from '@clerk/clerk-react'
import './RootLayout.css'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}


const RootLayout = () => {
    return (<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className="mainLayout" >
            <header>
                <Link to='/' className='logo'>
                    <img src={logo} alt="logo" />
                    <span>AI CHAT</span>
                </Link>
                <div className="user">
                    <SignedIn>
                        <SignOutButton />
                    </SignedIn>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    </ClerkProvider>
    )
}

export default RootLayout