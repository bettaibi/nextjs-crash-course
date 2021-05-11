import React from 'react';
import Meta from '../components/Meta';

const About = () => {
    return (
        <div>
            <Meta 
                title = "About Pages | Nidhal Bettaibi"
                description = "Next js crash course"
                keywords = "about, author"
            />

            <div className="green">
                 this is an about page
            </div>
        </div>
    )
}

export default About
