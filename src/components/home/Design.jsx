import React from 'react';
import Images from 'next/image'
import Link from 'next/link'
import imageStrategic from '../../assets/desktop/imageStrategic.jpg'

const Design = () => {
    return(
        <section className="Design">
            <Images 
            layout='responsive'
            src={imageStrategic} width={300} height={220}/>
            <div>
                <h2><span>Design</span> is strategic.</h2>
                <p>“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”</p>
                <Link href="/">Schedule a Call</Link>
            </div>
        </section>
    )
}

export default Design