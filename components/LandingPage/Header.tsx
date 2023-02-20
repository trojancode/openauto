import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Button from '../widgets/Button'

const Header = () => {
    return (
        <div className='py-8 flex justify-between'>
            <img src="/img/text_logo.svg" className='h-7' alt="" />
            <div className=' hidden md:flex gap-5 items-center text-sm text-gray-400'>
                <div className='flex gap-2 align-middle items-center text-gray-400'>
                    <PhoneIcon className=' text-gray-400 h-4 w-4' />
                    +769 586 4558
                </div>
                <div className='flex gap-2 align-middle items-center text-gray-400'>
                    <EnvelopeIcon className=' text-gray-400 h-4 w-4' />
                    service@openauto.ca
                </div>
                <Button className="bottom-2 font-bold border-2 !py-2 border-secondary">
                    Download the mobile app
                </Button>
            </div>
        </div>
    )
}

export default Header