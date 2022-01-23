import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    margin-top: 2em;

    .testimonial{
        color: white;
        width: 60%;
        border: 1px solid #DEDEDE; 
        padding: 2em;
        border-radius: 8px;

        .first-row{
            display: flex;

            .first-column{
                height: 3em;
            }

            .second-column{
                margin-left: 1em;
                display: flex;
                flex-direction: column;
                justify-content: center;

                p{
                    margin: 0;
                }
                .name{
                    font-size: 0.85rem;
                    font-weight: 300;
                }
                .role{
                    margin-top: -3px;
                    font-size: 0.9rem;
                }
            }
        }
        .second-row{
            p{
                font-size: .8rem;
                line-height: 1.2rem;
                font-weight: 300;
                margin-bottom: 0;
            }
        }
    }

    @media screen and (min-width: 768px){
    
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .testimonial{
            width: 15em;
        }
    }

    @media screen and (min-width: 950px){
        width: 950px;
        margin: 2em auto 0;

        .testimonial{
            width: 17em;
        }
    }
`

const Testimonial = ({data}) => {

    return(
        <Div>
            {
                data.map((val, key) => {
                    let {image, name, role, desc} = val;
                    return(
                        <div className="testimonial">
                            <div className="first-row">
                                <img className="first-column" src={image} alt="" />
                                <div className="second-column">
                                    <p className="name">
                                        {name}
                                    </p>
                                    <p className="role">
                                        {role}
                                    </p>
                                </div>
                            </div>
                            <div className="second-row">
                                <p>
                                    {desc}
                                </p>
                            </div>
                        </div> 
                    )
                })
            }
        </Div>
    );
};

export default Testimonial;
