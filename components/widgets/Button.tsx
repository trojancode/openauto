import React from 'react'

const Button = ({ className, children, ...props }: any) => {
    return (
        <button className={`text-gray-400 font-bold bg-transparent border-[1px] border-bordergray px-7 py-2 rounded-full hover:bg-purple-500 hover:text-white ${className}`}  {...props} >{children}</button>
    )
}

export default Button