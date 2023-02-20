import React from 'react'
import SocialMediaIcons from './SocialMediaIcons';
import SignupForm from './Form';
import LogoButton from '../widgets/LogoButton';
import Header from './header';

const SectionOne = () => {
    return (
        <div className='bg-dark min-h-screen'>
            <div className=' container px-5 md:px-0 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto '>

                {/* Header */}
                <Header></Header>



                {/* First section */}
                <div className='mt-10 grid grid-flow-col grid-rows-2 items-center sm:grid-rows-1 grid-cols-1 sm:grid-cols-2  justify-items-center'>
                    <div className=''>
                        <h1 className='text-4xl text-secondary font-semibold'>Vehicle Maintenance<br /> From The Comfort of <br /> Your Home</h1>
                        <p className='text-gray-400 font-light tracking-wider text-sm my-6'>Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</p>
                        <SignupForm></SignupForm>
                    </div>
                    <div className=''>
                        <img src="/img/Pickup_Illustration.png" alt="" />
                        <SocialMediaIcons></SocialMediaIcons>
                    </div>
                </div>

                {/* Logo button */}
                <div className=' mt-2 pb-3   flex  justify-center '>
                    <LogoButton onClick={() => {
                        window.location.hash = '#second-section';
                        document.querySelector('#second-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}></LogoButton>
                </div>

            </div>
        </div>
    )
}

export default SectionOne