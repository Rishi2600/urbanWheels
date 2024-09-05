'use client'
import React from 'react'
import { Button } from './ui/button'

function PriButton({children}:any) {
  return (
    <Button className='px-8 py-4 my-2 items-center font-semibold text-dark-color relative overflow-hidden bg-gradient-to-r from-[#59f7da] to-[#18e3f2] rounded-full shadow-lg '>{children}</Button>
  )
}

export default PriButton