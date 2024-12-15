import React from 'react'
import { useParams } from 'react-router-dom'

import { allrenderimages } from '..';


const Renderdetail = () => {


    const { category } = useParams();

    const resultImages = allrenderimages.filter((image) => image.category === category)




    return (
        <div className='flex flex-wrap items-center justify-center px-8 my-8'>
            {
                resultImages.map((images, index) => (
                    <div key={index} className="h-[20rem] w-[22rem] overflow-hidden rounded m-4">
                        <img src={images.src} alt={images.name} className="w-full h-full object-cover" />
                    </div>
                ))
            }
        </div>
    )
}

export default Renderdetail