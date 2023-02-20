import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import SignupForm from '@/components/LandingPage/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='bg-dark min-h-screen'>
        <div className=' container px-5 md:px-0 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto '>

          {/* Header */}
          <div className='py-8 flex justify-between'>
            <img src="/img/text_logo.svg" className='h-7' alt="" />
            <div className=' hidden md:flex gap-5 items-center text-sm text-gray-300'>
              <div className='flex gap-2 align-middle items-center text-gray-300'>
                <PhoneIcon className=' text-gray-300 h-4 w-4' />
                +769 586 4558
              </div>
              <div className='flex gap-2 align-middle items-center text-gray-300'>
                <EnvelopeIcon className=' text-gray-300 h-4 w-4' />
                service@openauto.ca
              </div>
              <button className=' text-gray-300 border-[1px] px-7 py-2 rounded-full'>
                Download the mobile app
              </button>
            </div>
          </div>



          <div className='mt-10 grid grid-flow-col grid-rows-2 items-center sm:grid-rows-1 grid-cols-1 sm:grid-cols-2  justify-items-center'>

            <div className=''>
              <h1 className='text-4xl text-gray-300 font-semibold'>Vehicle Maintenance<br /> From The Comfort of <br /> Your Home</h1>
              <p className='text-gray-300 font-light'>Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</p>

              <SignupForm></SignupForm>
            </div>


            <div className=''>
              <img src="/img/Pickup_Illustration.png" alt="" />
              <div className=' mt-3 md:mt-0 flex gap-4 text-center justify-center md:float-right'>
                <PhoneIcon className='w-5 h-5'></PhoneIcon>
                <PhoneIcon className='w-5 h-5'></PhoneIcon>
                <PhoneIcon className='w-5 h-5'></PhoneIcon>
                <PhoneIcon className='w-5 h-5'></PhoneIcon>
                <PhoneIcon className='w-5 h-5'></PhoneIcon>
              </div>
            </div>

          </div>

          <div className=' mt-2 pb-3   flex  justify-center '>
            <img src="/img/logo.svg" className='h-7 w-7 ' alt="" />
          </div>

        </div>
      </div>

      <div className=' bg-gradient-to-b from-dark2 to-dark3'>
        <div className=' pb-20 container px-5 pt-10 md:px-0 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto '>

          <div className='mt-10 grid grid-flow-col grid-cols-1  grid-rows-2 items-center sm:grid-rows-1  sm:grid-cols-2  justify-items-center'>
            <div className='order-last md:order-first'>
              <img src="/img/picku service.png" className=' max-h-96' alt="" />
            </div>

            <div className=' '>
              <h1 className='text-4xl mb-5'>Focused on<br /> Time Saving</h1>
              <p className='mb-5'>Lorem ipsum dolor sit amet. Et natus voluptate ut facere suscipit ut laudantium aliquam qui neque culpa ea assumenda reiciendis vel tempore exercitationem ea odio corporis. At asperiores molestiae est unde dolores ut numquam odio in commodi itaque et dolore consectetur in quos voluptatum ea temporibus quasi.</p>
              <div className=' max-w-full md:max-w-xs flex flex-col gap-5'>
                <button className=' text-gray-300 border-[1px] px-7 py-2 rounded-full'>
                  Download the mobile app
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className='  pb-10 container px-5 pt-10 md:px-0 max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto border-t-2 border-dark '>
          <div className=' flex justify-between text-center flex-col md:flex-row'>
            <img src="/img/text_logo.svg" className='text-white h-6 mx-auto md:mx-0' alt="" />
            <div className='flex my-5 md:mt-0 justify-between gap-5 items-center text-sm text-gray-300'>
              <div className='flex gap-2 align-middle items-center text-gray-300'>
                <PhoneIcon className=' text-gray-300 h-4 w-4' />
                +769 586 4558
              </div>
              <div className='flex gap-2 align-middle items-center text-gray-300'>
                <EnvelopeIcon className=' text-gray-300 h-4 w-4' />
                service@openauto.ca
              </div>
            </div>
          </div>
          <div className=' flex flex-col md:flex-row justify-between mt-4'>
            <p className=' text-center md:text-left w-full align-middle items-center text-gray-300'>
              Open Auto @ all rights reserved
            </p>
            <div className='flex md:hidden justify-around mt-6 flex-row text-gray-400'>
              <p className='text-gray-300'>Privacy policy</p>
              <p className='text-gray-300'>Terms of use</p>
              <p className='text-gray-300'>Cookie policy</p>
            </div>
            <div className=' flex mt-8 md:mt-0 gap-4 text-center justify-between md:float-right'>
              <PhoneIcon className='w-5 h-5'></PhoneIcon>
              <PhoneIcon className='w-5 h-5'></PhoneIcon>
              <PhoneIcon className='w-5 h-5'></PhoneIcon>
              <PhoneIcon className='w-5 h-5'></PhoneIcon>
              <PhoneIcon className='w-5 h-5'></PhoneIcon>
            </div>
          </div>

        </div>


      </div>



    </div>
  )
}
