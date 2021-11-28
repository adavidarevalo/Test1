import React from 'react';
import Branding from '../components/home/Branding'
import Design from '../components/home/Design'
import OurApproach from '../components/home/OurApproach'
import BrandNaming from '../components/home/BrandNaming'
import Form from '../components/home/Form'


const index = () => {
    return(
        <div>
            <Branding/>
            <Design/>
            <OurApproach/>
            <BrandNaming/>
            <Form/>
        </div>
    )
}

export default index