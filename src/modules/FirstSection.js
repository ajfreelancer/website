import React from 'react'
import bgImage from '../img/Background.png'
import styled from 'styled-components'
import Header from './Header'
// import "animate.css"

const Div = styled.div`
    height: 680px;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center bottom;
    display: flex;
    justify-content: center;
    
    .container{
        

        .first-section-content{
            text-align: center;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 3em;
        }
        
        h1{
            width: 70%;
            font-size: 2rem;
            line-height: 2.5rem;
            margin: 0
        }

        p{
            width: 80%;
            line-height: 1.7rem;
            font-size: 1rem;
            margin: auto;
            font-weight: 500;
            margin-top: 30px;
        }
        .tryFreeCTA{
            width: fit-content;
            padding: 0.8rem 4rem;
            background-color: #1EA7F3;
            font-size: 1rem;
            font-weight: 500;
            color: white;
            border-radius: 6px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
            margin-top: 40px;
            user-select: none;

            &:hover{
                background-color: #1c92d3;
            }
        }
    }

    @media screen and (min-width: 720px){

        height: 850px;

        .container .first-section-content{
            margin-top: 7em;

            h1{
                width: 10em;
                font-size: 3.5rem;
                line-height: 1.1em;
            }
            p{
                font-size: 1.25rem;
                width: 27em;
                line-height: 1.5em;
            }
        }
    }
`

const FirstSection = () => {
    return (
        <Div>
            <section className='container'>
                <Header />
                <div className="first-section-content">
                    <h1 className='animate__animated animate__bounce'>Supercharge your Symbols</h1>
                    <p className='animate__animated animate__bounce'>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>  
                    <div className='tryFreeCTA'>
                        Try For Free
                    </div>
                </div>
            </section>  
        </Div>
    )
}

export default FirstSection
