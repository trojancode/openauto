import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import SignupForm from '@/components/LandingPage/Form'
import Button from '@/components/widgets/Button'
import SocialMediaIcons from '@/components/LandingPage/SocialMediaIcons'
import Footer from '@/components/LandingPage/Footer'
import Header from '@/components/LandingPage/Header'
import LogoButton from '@/components/widgets/LogoButton'
import SectionOne from '@/components/LandingPage/SectionOne'
import SectionTwo from '@/components/LandingPage/SectionTwo'


export default function Home() {
  return (
    <div>

      {/* First section */}
      <SectionOne></SectionOne>

      {/* Second section */}
      <SectionTwo></SectionTwo>

    </div>
  )
}
