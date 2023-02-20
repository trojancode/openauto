import React from 'react'

const Input = ({ className, ...props }: any) => {
    return (
        <input className={`text-gray-400 bg-transparent border-[1px] px-7 py-2 rounded-full ${className}`}  {...props} />
    )
}

export default Input