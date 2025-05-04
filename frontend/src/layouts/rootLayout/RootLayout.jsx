import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/react.svg'
import { ClerkProvider, SignedIn, SignOutButton } from '@clerk/clerk-react'
import './RootLayout.css'
import {
    useQueryClient,
    QueryClientProvider,
    QueryClient,
} from '@tanstack/react-query'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const queryClient = new QueryClient();

const RootLayout = () => {
    return (<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <QueryClientProvider client={queryClient}>

            <div className="p-0 h-dvh w-full flex flex-col">
                <header className='w-full flex justify-between items-center bg-[#0a0a0a]'>
                    <Link to='/' className='flex items-center text-white m-[1em] font-bold gap-[8px]'>
                        <img src={logo} alt="logo" className='w-[32px] h-[32px]' />
                        <span>AI CHAT</span>
                    </Link>
                    <div className="user">
                        <SignedIn>
                            <SignOutButton />
                        </SignedIn>
                    </div>
                </header>
                <main className='overflow-hidden flex-1'>
                    <Outlet />
                </main>
            </div>
        </QueryClientProvider>
    </ClerkProvider>
    )
}

export default RootLayout