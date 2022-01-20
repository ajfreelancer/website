import React from 'react'
import styled from 'styled-components'
import WhiteGraph from "../img/WhiteGraph.png"
import BlackGraph from '../img/BlackGraph.png'

const Div = styled.div`

    .grid{
        display: grid;
        grid-template-columns: 1fr;
        margin: 5em 0;

        .firstColumn{
            display: flex;
            flex-direction: column;
            align-content: center;

            img{
                align-self: center;
            }
            .whiteGraph{
                width: 85%;
            }
            .blackGraph{
                width: 80%;
                margin-top: -7em;
            }
        }
        .secondColumn{
            display: flex;
            flex-direction: column;
            color: white;
            align-items: center;
            text-align: center;

            h2{
                width: 11em;
                font-size: 1.6rem;
                font-weight: 600;
                line-height: 2rem;
            }
            p{
                width: 18em;
                margin-top: 0;
                font-size: .9rem;
                line-height: 1.3rem;
            }
            .learn-more-button{
                margin-top: .2em;

                a{
                    text-decoration: none;
                    font-size: .8rem;
                    color: #1EA7F3;
                }
            }
        }
    }

    @media screen and (min-width: 768px){
        .grid{
            .firstColumn{
                .whiteGraph{
                    width: 70%;
                }
                .blackGraph{
                    width: 40%;
                }
            }
            .secondColumn{
                h2{
                    width: 15em;
                    font-size: 1.8rem;
                    line-height: 1.3em;
                    margin-bottom: 0;
                }
                p{
                    width: 25em;
                    margin-top: 1.5em;
                }
            }
        }
    }

    @media screen and (min-width: 1024px){
        .grid{
            grid-template-columns: 1fr 1fr;
            width: 1024px;
            margin: 150px auto;

            .firstColumn{
                position: relative;

                .whiteGraph{
                    width: auto;
                }
                .blackGraph{
                    position: absolute;
                    width: 20em;
                    margin: 0;
                    bottom: -1px;
                    align-self: flex-start;
                }
            }

            .secondColumn{
                text-align: left;
                align-items: flex-start;
                justify-content: center;
                margin-left: 2em;

                h2{
                    width: 13em;
                }

                p{
                    line-height: 1.5rem;
                }
            }
        }
    }
`

const SecondSection = () => {
    return (
        <Div>
            <section>
                <div className="grid">
                    <div className='firstColumn'>
                        <img className='whiteGraph' src={WhiteGraph} alt="white graph" />
                        <img className='blackGraph' src={BlackGraph} alt="black graph" />
                    </div>
                    <div className='secondColumn'>
                        <h2>We focus on ergonomics and meeting you where you work. </h2>
                        <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                        <div className='learn-more-button'><a href="#">LEARN MORE</a></div>
                    </div>
                </div>
            </section>
        </Div>
    )
}

export default SecondSection
