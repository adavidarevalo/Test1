import React from 'react';
import Images from 'next/image'
import Link from 'next/link'
import imageHero from '../../assets/desktop/imageHero.jpg'
const Branding = () => {
    return(
        <section className="branding">
            <Images src={imageHero} 
            layout='responsive'
            width={100} height={100}/>
            <div>
                <h2>Branding & website design agency</h2>
                <p>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
                <Link href="/">Learn More</Link>
            </div>
        </section>
    )
}

export default Branding