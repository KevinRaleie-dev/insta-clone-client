import React from 'react'
import { Logo } from '../logo'

import { FiHome, FiHeart, FiUser, FiPlus } from 'react-icons/fi'
import Link from 'next/link'

export const Nav = () => {
  return (
      <header>
        <nav
        className="flex flex-row justify-between items-center border-b-[1px] border-gray-300 p-2 px-10 top-0 sticky"
        >
            <div className="flex">
                <Logo />
            </div>
            <div>
                <input 
                placeholder='Search'
                className='border-none outline-none px-4 py-2 font-light bg-gray-200 rounded-md'
                type="text" />
            </div>
            <ul className="flex justify-between space-x-5 cursor-pointer">
                <li>
                    <FiHome
                    className='w-6 h-6'
                    />
                </li>
                <li>
                    <FiPlus
                     className='w-6 h-6'
                    />
                </li>
                <li>
                    <FiHeart
                     className='w-6 h-6'
                    />
                </li>
                <li>
                    <Link href='/profile' passHref>
                        <FiUser
                        className='w-6 h-6'
                        />
                    </Link>
                </li>
            </ul>
        </nav>
      </header>
  )
}