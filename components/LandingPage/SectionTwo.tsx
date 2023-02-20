import React from 'react'
import Button from '../widgets/Button'
import Footer from './Footer'

const SectionTwo = () => {
    return (
        <div className=' bg-gradient-to-b from-dark2 to-dark3' id="second-section">
            <div className=' pb-20 container px-5 pt-10 md:px-0 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto  '>
                <div className='mt-10 grid grid-flow-col grid-cols-1  grid-rows-2 items-center sm:grid-rows-1  sm:grid-cols-2  justify-items-center'>
                    <div className='order-last md:order-first'>
                        <img src="/img/picku service.png" className=' max-h-96' alt="" />
                    </div>

                    <div className=' '>
                        <h1 className='text-4xl mb-5 text-secondary font-bold'>Focused on<br /> Time Saving</h1>
                        <p className='mb-5 text-gray-400 font-extralight text-sm  tracking-wider'>Lorem ipsum dolor sit amet. Et natus voluptate ut facere suscipit ut laudantium aliquam qui neque culpa ea assumenda reiciendis vel tempore exercitationem ea odio corporis. At asperiores molestiae est unde dolores ut numquam odio in commodi itaque et dolore consectetur in quos voluptatum ea temporibus quasi.</p>
                        <div className=' max-w-full md:max-w-xs flex flex-col gap-5'>
                            <Button className="bottom-2 font-bold border-2 !py-2 border-secondary">
                                Download the mobile app
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    )
}

export default SectionTwo