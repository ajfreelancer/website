import React from 'react';
import styled from 'styled-components';
import Testimonial from './components/Testimonial';
import image from '../img/testimonialDP.png';

const Div = styled.div`
    margin-top: 9em;

    h2{
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2rem;
        color: white;
        text-align: center;
    }

`

const SeventhSection = () => {

    return(
            <section>
                <Div>
                    <h2>Testimonials</h2>
                    <div className="testimonials">
                        <Testimonial />
                    </div>
                </Div>
            </section>
    );
};

export default SeventhSection;
