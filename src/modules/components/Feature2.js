import React from 'react'
import styled from 'styled-components'

const Div = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: fit-content;
    

    .feature{
        color: white;
        margin: 1em;

        .first-row{
            display: flex;

            .feature-icon{
                width: 25px;
            }
            .feature-title{
                width: 8em;
                margin: 0;
                font-weight: 600;
                padding-left: 0.6em;
                font-size: 1rem;
            }

            svg{
                width: 2em;
            }
        }
        .second-row{
            .desc{
                font-size: .75rem;
                width: 16.1em;
                font-weight: 300;
            }
        }
    }

    @media screen and (min-width: 768px){
        margin: 2em auto;
        flex-direction: row;
        align-items: center;
        text-align: center;

        .feature{
            .first-row{
            flex-direction: column;
            align-items: center;

                .feature-icon{ 
                    width: 30px;
                }
                .feature-title{
                    padding-left: 0em;
                }
            }
        }
    }

    @media screen and (min-width: 1024px){
        
        margin: 7em auto;
        align-items: flex-start;
        text-align: left;
        gap: 2em;

        .feature{
            .first-row{
            flex-direction: row;
            align-items: center;

                .feature-icon{ 
                    width: 30px;
                }
                .feature-title{
                    padding-left: .8em;
                }
            }
        }
    }
`

const Feature2 = ({feature}) => {
    return (
        <Div>
            {
                feature.map((f, k) => {
                    return(
                        <div className="feature" key={k}>
                            <div className="first-row">
                                <div className="feature-icon">
                                    {f.svg}
                                </div>
                                <h3 className='feature-title'>
                                    {f.title}
                                </h3>
                            </div>
                            <div className="second-row">
                                <p className="desc">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </Div>
    )
}

export default Feature2
