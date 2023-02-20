import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
    return (
        <div className='  pb-10 container px-5 pt-10 md:px-0 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto border-t-2 border-dark '>
            <div className=' flex justify-between text-center flex-col md:flex-row'>
                <img src="/img/text_logo.svg" className='text-white h-6 mx-auto md:mx-0' alt="" />
                <div className='flex my-5 md:mt-0 justify-between gap-5 items-center text-sm text-gray-400'>
                    <div className='flex gap-2 align-middle items-center text-gray-400'>
                        <PhoneIcon className=' text-gray-400 h-4 w-4' />
                        +769 586 4558
                    </div>
                    <div className='flex gap-2 align-middle items-center text-gray-400'>
                        <EnvelopeIcon className=' text-gray-400 h-4 w-4' />
                        service@openauto.ca
                    </div>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row justify-between mt-4'>
                <p className=' text-center md:text-left w-full align-middle items-center text-gray-400'>
                    Open Auto @ all rights reserved
                </p>
                <div className='flex md:hidden justify-around mt-6 flex-row text-gray-400'>
                    <p className='text-gray-400'>Privacy policy</p>
                    <p className='text-gray-400'>Terms of use</p>
                    <p className='text-gray-400'>Cookie policy</p>
                </div>
                <SocialMediaIcons></SocialMediaIcons>
            </div>
        </div>
    )
}

export default Footer