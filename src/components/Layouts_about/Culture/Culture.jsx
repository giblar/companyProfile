import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Culture = () => {
    return (
        <div>
            <h1 className='text-3xl font-mono font-semibold text-center mb-10'>This is the <span className='text-blue-800'>work culture</span> we usually do in the <span className='text-blue-800'>office</span></h1>
            <div className=' mx-10'>
                <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                    <div className='flex justify-center'>
                        <img src="/image/rounded.jpg" alt="" className='w-1/2' />
                    </div>

                    <div className='flex items-center'>
                    <div className=''>
                        <h1 className='text-2xl font-semibold '>judul berita</h1>

                        <div className='flex my-8'>
                            <FontAwesomeIcon icon={faAndroid} className='self-center mr-3'/>
                            <div>
                                <h1 className='text-md font-semibold '>mobile Aplication</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iure.</p>
                            </div>
                        </div>
                        

                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Culture
