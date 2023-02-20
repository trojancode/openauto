import React, { useState } from 'react'
import { AddUserAPI } from '../repo/UserApis'

const SignupForm = () => {
    const [Data, setData] = useState<any>({})
    const [loading, setLoading] = useState<Boolean>(false)
    const [success, setSuccess] = useState<any>(false)
    const [error, setError] = useState<any>(false)


    const handleOnChange = (key: string) => (e: any) => {
        setData({ ...Data, [key]: e.target.value })
    }

    const onSubmit = async (e: any) => {
        setLoading(true)
        await AddUserAPI(Data).then(data => {
            setSuccess("User added")
            setError(false)
        }).catch(err => {
            setSuccess(false)
            setError(err)
        })
        setLoading(false)
    }

    return (
        <form onSubmit={onSubmit} className=' max-w-full md:max-w-md flex flex-col gap-5'>
            <input required onChange={handleOnChange('name')} className=' text-gray-300 bg-transparent border-[1px] px-7 py-2 rounded-full' placeholder='Enter Your Name' />
            <input required type='email' onChange={handleOnChange('email')} className=' text-gray-300 bg-transparent border-[1px] px-7 py-2 rounded-full' placeholder='Enter Your Email' />
            <button className=' text-gray-300 bg-transparent border-[1px] px-7 py-2 rounded-full'>
                Submit
            </button>
        </form>
    )
}

export default SignupForm