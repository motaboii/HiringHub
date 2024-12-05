import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center' >
      <nav className='m-10 py-4 flex justify-between items-center'>
        <Link>
        <img src='/logo.png' className='h-[98px]'/>
        </Link>
      </nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Header
