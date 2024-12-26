import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { allrenderimages } from '..';


const Renderdetail = () => {


    const { category } = useParams();

    const resultImages = allrenderimages.filter((image) => image.category === category)




    return (
        <div className='bg-gray-900 flex flex-wrap items-center justify-center px-8 py-8'>
            {
                resultImages.map((images, index) => (
                    <div key={index} className="h-[20rem] w-[22rem] overflow-hidden rounded m-4">
                        <img src={images.src} alt={images.name} className="w-full h-full object-cover" loading='lazy' />
                    </div>

                ))
            }
        </div>
    )
}

export default Renderdetail