import React from 'react'
import styled from 'styled-components'
import WhiteGraph from "../img/WhiteChart1.png"
import BlackGraph from '../img/WhiteChart2.png'

const Div = styled.div`

    .pinkBlob{
        width: 50%;
        position: absolute;
        z-index: -1;
        right: -1px;
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr;
        margin: 5em 0;

        .firstColumn{
            display: flex;
            flex-direction: column;
            align-content: center;
            position: relative;

            img{
                align-self: center;
            }
            .whiteGraph{
                width: 85%;
                display: none;
            }
            .blackGraph{
                width: 90%;
            }
        }
        .secondColumn{
            display: flex;
            flex-direction: column;
            color: white;
            align-items: center;
            text-align: center;
            margin-top: 2em;

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
                .blackGraph{
                    width: 80%;
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
        .pinkBlob{
            width: 18em;
        }
        .grid{
            grid-template-columns: 1fr 1fr;
            width: 1024px;
            margin: 150px auto;
            height: fit-content;

            .firstColumn{
                position: relative;
                order: 2;

                .whiteGraph{
                    display: inline-block;
                    width: auto;
                    z-index: 1;
                    position: absolute;
                    bottom: -4em;
                    left: -4em;

                }
                .blackGraph{
                    width: 100%;
                    margin: 0;
                    /* bottom: -1px; */
                    align-self: flex-start;
                }
            }

            .secondColumn{
                text-align: left;
                align-items: flex-start;
                justify-content: center;
                order: 1;
                margin-left: 6em;

                h2{
                    margin-top: 0;
                    width: 11em;
                }

                p{
                    line-height: 1.5rem;
                    width: 22em;
                }
            }
        }
    }
`

const ThirdSection = () => {
    return (
        <Div>
            <section>
                <svg className='pinkBlob' viewBox="0 0 391 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M250.913 0.0289103C296.961 -1.03399 336.722 27.4039 374.56 53.621C413.239 80.4199 450.54 109.729 470.605 152.246C492.597 198.849 506.984 252.388 491.562 301.549C476.072 350.928 429.034 380.316 388.818 412.965C345.998 447.728 306.073 494.992 250.913 496.92C195.259 498.866 142.108 465.012 105.805 422.86C73.4526 385.295 84.033 329.669 66.8453 283.197C48.5336 233.687 -12.368 193.569 2.24109 142.847C16.7713 92.3984 85.7697 85.4132 131.351 59.2348C170.88 36.5325 205.32 1.08128 250.913 0.0289103Z" fill="#FC4746"/>
                </svg>
                <div className="grid">
                    <div className='firstColumn'>
                        <img className='whiteGraph' src={WhiteGraph} alt="white graph" />
                        <img className='blackGraph' src={BlackGraph} alt="black graph" />
                    </div>
                    <div className='secondColumn'>
                        <h2>OpenType features and Variable fonts</h2>
                        <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                        <div className='learn-more-button'><a href="#">LEARN MORE</a></div>
                    </div>
                </div>
            </section>
        </Div>
    )
}

export default ThirdSection
