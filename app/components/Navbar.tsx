import { auth, signOut, signIn } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function Navbar() {
  const session = await auth()
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className='text-black flex gap-4'>
          {session && session?.user ? (
            <>
              <Link href="">
                <span>Create</span>
              </Link>
              <form action={async () => {
                "use server";
                await signOut({options: { redirectTo: "/"}});
              }}>

              <button type='submit'>Logout</button>
              </form>
              
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : ( 
            <form action={async () => {
              "use server"
              await signIn({ provider: 'github' });
            }}>
              <button type='submit'>Login</button>
            </form>
          )} 
        </div>
      </nav>
    </header>
  )
}

export default Navbar;