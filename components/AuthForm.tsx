'use client'

import { z } from "zod"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from "./CustomInput"
import { authFormSchema } from "@/lib/utils"


const AuthForm = ({type}: {type: string}) => {
    const [user, setUser] = useState(null)

  // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href="/" className="cursor-pointer flex items-center gap-1 my-2">
                <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon Logo"/>
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
                    Horizon
                </h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user?
                        'Link Account'
                        : type ==='sign-in'
                            ? 'Sign in'
                            : 'Sign up'
                    }
                    <p className='text-16 font-normal text-gray-600 '>
                        {user 
                            ? 'Link your account to get started'
                            : 'Please enter your details'
                        }
                    </p>
                </h1>
            </div>
        </header>
        {user?(
            <div className='flex flex-col gap-4'>
                {/* PlaidLink */}
            </div>
        ): (
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <CustomInput 
                            control={form.control}
                            name= "email"
                            label='Email'
                            placeholder="abc@gmail.com"
                            type="text"
                        />
                        <CustomInput 
                            control={form.control}
                            name= "password"
                            label='Password'
                            placeholder="abc@123"
                            type="password"
                        />
                        
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </>
        )}
    </section>
  )
}

export default AuthForm