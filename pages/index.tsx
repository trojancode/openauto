import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import SignupForm from '@/components/LandingPage/Form'
import Button from '@/components/widgets/Button'
import SocialMediaIcons from '@/components/LandingPage/SocialMediaIcons'
import Footer from '@/components/LandingPage/Footer'
import Header from '@/components/LandingPage/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='bg-dark min-h-screen'>
        <div className=' container px-5 md:px-0 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto '>

          {/* Header */}
          <Header></Header>



          {/* First section */}
          <div className='mt-10 grid grid-flow-col grid-rows-2 items-center sm:grid-rows-1 grid-cols-1 sm:grid-cols-2  justify-items-center'>
            <div className=''>
              <h1 className='text-4xl text-gray-400 font-semibold'>Vehicle Maintenance<br /> From The Comfort of <br /> Your Home</h1>
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
            <img src="/img/logo.svg" className='h-7 w-7 ' alt="" />
          </div>

        </div>
      </div>

      {/* Second section */}
      <div className=' bg-gradient-to-b from-dark2 to-dark3'>

        <div className=' pb-20 container px-5 pt-10 md:px-0 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto '>
          <div className='mt-10 grid grid-flow-col grid-cols-1  grid-rows-2 items-center sm:grid-rows-1  sm:grid-cols-2  justify-items-center'>
            <div className='order-last md:order-first'>
              <img src="/img/picku service.png" className=' max-h-96' alt="" />
            </div>

            <div className=' '>
              <h1 className='text-4xl mb-5 text-gray-400 font-bold'>Focused on<br /> Time Saving</h1>
              <p className='mb-5 text-gray-400 font-extralight text-sm  tracking-wider'>Lorem ipsum dolor sit amet. Et natus voluptate ut facere suscipit ut laudantium aliquam qui neque culpa ea assumenda reiciendis vel tempore exercitationem ea odio corporis. At asperiores molestiae est unde dolores ut numquam odio in commodi itaque et dolore consectetur in quos voluptatum ea temporibus quasi.</p>
              <div className=' max-w-full md:max-w-xs flex flex-col gap-5'>
                <Button className="bottom-2 font-bold">
                  Download the mobile app
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer></Footer>


      </div>



    </div>
  )
}
