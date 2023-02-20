import Image from 'next/image'
import React from 'react'

const SocialMediaIcons = () => {
    return (
        <div className=' mt-3 md:mt-0 flex gap-4 text-center justify-center md:float-right'>
            <Image alt='' src='/img/facebook.png' className='w-5 h-5'></Image>
            <Image alt='' src='/img/twitter.png' className='w-5 h-5'></Image>
            <Image alt='' src='/img/yt.png' className='w-5 h-5'></Image>
            <Image alt='' src='/img/linkedin.png' className='w-5 h-5'></Image>
            <Image alt='' src='/img/instagram.png' className='w-5 h-5'></Image>
        </div>

    )
}

export default SocialMediaIcons