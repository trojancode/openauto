import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useState } from 'react'

const LogoButton = ({ onClick }: any) => {
    const [roatate, setRoatate] = useState(false)

    const hanldeclick = (e: any) => {
        setRoatate(!roatate)
        if (onClick) {
            onClick()
        }
    }
    return (
        <Image onClick={hanldeclick} src="/img/logo.svg" className={"h-7 w-7 transition ease-in-out delay-150 hover:rotate-180  "} alt="" />

    )
}

export default LogoButton