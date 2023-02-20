import React from 'react'

const Input = ({ className, ...props }: any) => {
    return (
        <input className={` font-light text-base bg-transparent border-[1px] text-gray-900 border-bordergray px-7 py-2 rounded-full ${className}`}  {...props} />
    )
}

export default Input