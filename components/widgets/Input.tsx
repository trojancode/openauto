import React from 'react'

const Input = ({ className, ...props }: any) => {
    return (
        <input className={` font-light text-base bg-transparent border-[1px] text-secondary placeholder:text-gray-500 border-bordergray px-7 py-3 rounded-full ${className}`}  {...props} />
    )
}

export default Input