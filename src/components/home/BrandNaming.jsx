import React from 'react';
import Image from 'next/image'
import imageSlide1 from '../../assets/desktop/imageSlide1.jpg'
import iconArrowNext from '../../assets/desktop/iconArrowNext.svg'
import iconArrowPrevious from '../../assets/desktop/iconArrowPrevious.svg'

const BrandNaming = () => {
    return(
        <section className="BrandNaming">
            <Image 
            layout='responsive'
            src={imageSlide1} width={300} height={220}/>
            <div>
                <h2>Brand naming & guidelines</h2>
                <div>
                    <div>
                        <Image src={iconArrowPrevious} width={50} height={50}/>
                    </div>
                    <div>
                        <Image src={iconArrowNext} width={50} height={50}/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default BrandNaming