"use client"

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = ({user} : MobileNavProps) => {
  const pathname= usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image
                    src= "/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt='Menu'
                    className='cursor-pointer'
                />
            </SheetTrigger>
                <SheetContent side='left' className='border-none bg-white'>
                    <Link href="/" className="cursor-pointer flex items-center gap-1 px-4 my-2">
                        <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon Logo"/>
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
                            Horizon
                        </h1>
                    </Link>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col pt-8    gap-6 text-white'>
                                {sidebarLinks.map((item)=>{
                                    const isActive= pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key= {item.label} className={cn('mobilenav-sheet_close w-full ml-4',{'bg-bank-gradient': isActive})}>
                                                <div className='relative size-6'>
                                                    <Image
                                                        src={item.imgURL}
                                                        alt= {item.label}
                                                        width={20}
                                                        height={20}
                                                        className={cn({
                                                            'brightness-[3] invert-0': isActive
                                                        })}

                                                    />
                                                </div>
                                                <p className={cn("text-16 font-semibold text-black-2 ", { "!text-white": isActive })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}

                                User   
                            </nav>
                        </SheetClose>

                        Footer
                    </div>
                </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav