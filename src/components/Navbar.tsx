'use client'
import { Mail, Menu, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import PriButton from './PriButton'

function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <nav>
        <div className="nav-strip sticky top-0 px-1 py-1 bg-dark-color w-full flex text-white font-normal" >

            <div className=" flex contact-info absolute top-0 right-4 items-center justify-center align-center">
                <Mail fill='text-theme-color' className='text-theme-color ml-0 mr-1 p-0.5' /> <Link href={''} className='ml-0 mr-4'>gmail</Link>
                <Phone className='text-theme-color ml-0 mr-1 p-0.5' /> <Link href={''} className='ml-0 mr-4'>Contact number</Link>
            </div>

            <div className="flex items-center justify-center grow mx-auto w-full">
                <span className=' font-bold mr-2'>We are now live in Goa!</span>
            </div>
        </div>

        <div className="nav-main flex place-content-between items-center ease-in-out px-7 flex-wrap shadow-sm ">

        <div className="logo">
            <Link href={''} >
                <Image src='/freedo-logo.fe30d79770ed859f6769.png'
                className='h-full max-w-full w-24'
                width={100}
                height={100}
                alt='logo'></Image> 
            </Link>
        </div>

        <ul className='flex p-2'>
            <li className='mx-4 font-bold hidden sm:block text-theme-color'><Link href={''}>Home</Link></li>
            <li className='mx-4 hidden sm:block'><Link href={''}>About Us</Link></li>
            <li className='mx-4 hidden sm:block'><Link href={''}>Blogs</Link></li>
        </ul>


            { isMobile ?  (
                <div className=''>
                    <PriButton>
                        <Menu />
                    </PriButton>
                </div>
                ) : (
                    <div className="btn">
                    <PriButton>Sign In</PriButton>
                    </div>
                )
            }

        </div>
    </nav>
  )
}

export default Navbar