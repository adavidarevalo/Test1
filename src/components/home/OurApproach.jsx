import React from 'react';

const elementJSON = [
    {
        id: 1,
        title: 'Brand Strategy',
        paragraph: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'
    },
    {
        id: 2,
        title: 'Brand Strategy',
        paragraph: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'
    }, 
    {
        id: 3,
        title: 'Brand Strategy',
        paragraph: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'
    },
    {
        id: 4,
        title: 'Brand Strategy',
        paragraph: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'
    }, 
]

const OurApproach = () => {
    return(
        <section className="OurApproach">
            <div>
                <h2>Our approach for creating a winning brand</h2>
            </div>
            <div>
                {elementJSON.map(item => (
                <div key={item.id}>
                    <p className="Approach-Number">0{item.id}</p>
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default OurApproach