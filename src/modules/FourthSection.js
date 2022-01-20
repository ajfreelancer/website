import React from 'react'
import styled from 'styled-components'
import BigGraph from '../img/BigGraph.png'
import SmallGraph from '../img/SmallGraph.png'
import Feature from './components/Feature'

const features = [
    {
        svg: <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.64636 14.2373L11.4197 10.464L3.16636 2.22396C2.52636 1.58396 1.41969 1.75729 1.01969 2.58396C0.073024 4.57063 0.419691 7.01063 2.05969 8.66396L7.64636 14.2373ZM16.6864 11.824C18.7264 12.7706 21.593 12.104 23.713 9.98396C26.2597 7.43729 26.753 3.78396 24.793 1.82396C22.8464 -0.122706 19.193 0.357294 16.633 2.90396C14.513 5.02396 13.8464 7.89062 14.793 9.93062L2.71302 22.0106C2.46372 22.2599 2.32366 22.5981 2.32366 22.9506C2.32366 23.3032 2.46372 23.6413 2.71302 23.8906C2.96233 24.1399 3.30046 24.28 3.65302 24.28C4.00559 24.28 4.34372 24.1399 4.59302 23.8906L12.8464 15.664L21.0864 23.904C21.2098 24.0274 21.3563 24.1253 21.5176 24.1921C21.6789 24.2589 21.8518 24.2933 22.0264 24.2933C22.2009 24.2933 22.3738 24.2589 22.5351 24.1921C22.6964 24.1253 22.8429 24.0274 22.9664 23.904C23.0898 23.7805 23.1877 23.634 23.2545 23.4727C23.3213 23.3114 23.3557 23.1385 23.3557 22.964C23.3557 22.7894 23.3213 22.6165 23.2545 22.4552C23.1877 22.2939 23.0898 22.1474 22.9664 22.024L14.7264 13.784L16.6864 11.824Z" fill="#FC4746"/>
            </svg>,
        title: "A single source of truth",
        desc: "When you add work to your Slate calendar we automatically calculate useful insights"
    },
    {
        svg: <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5495 14.0234C14.0285 16.4834 13.811 19.3784 12.042 20.5484C10.273 21.6884 7.634 20.6234 6.1405 18.1634C4.6615 15.7034 4.8935 12.7784 6.6625 11.6384C8.4315 10.4984 11.0705 11.5634 12.5495 14.0234ZM15 24.2534C17.9 24.2534 18.625 23.1284 18.625 23.1284C18.625 23.1284 17.9 26.1284 15 26.1284C12.1 26.1284 11.375 23.1734 11.375 23.1284C11.375 23.1284 12.1 24.2534 15 24.2534ZM23.3375 11.6384C25.1065 12.7784 25.3385 15.7034 23.8595 18.1634C22.366 20.6234 19.727 21.6884 17.958 20.5484C16.189 19.3784 15.9715 16.4834 17.4505 14.0234C18.9295 11.5634 21.5685 10.4984 23.3375 11.6384ZM15 27.6284C18.625 27.6284 26.6 19.9184 26.6 14.1284C26.6 8.33842 21.3945 3.62842 15 3.62842C8.6055 3.62842 3.4 8.33842 3.4 14.1284C3.4 19.9184 11.375 27.6284 15 27.6284ZM15 0.628418C22.975 0.628418 29.5 6.68842 29.5 14.1284C29.5 20.2484 21.264 30.6284 15 30.6284C8.736 30.6284 0.5 20.2484 0.5 14.1284C0.5 6.68842 7.025 0.628418 15 0.628418Z" fill="#FC4746"/>
            </svg>,
        title: "Intuitive interface",
        desc: "When you add work to your Slate calendar we automatically calculate useful insights"
    },
    {
        svg: <svg viewBox="0 0 42 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.275 0.628458C29.815 0.628458 27.4917 1.6173 25.8346 3.33013L13.825 14.3487C12.7317 15.4788 11.2796 16.0968 9.725 16.0968C6.53042 16.0968 3.91667 13.4305 3.91667 10.1284C3.91667 6.8264 6.53042 4.16005 9.725 4.16005C11.2796 4.16005 12.7317 4.77808 13.8933 5.97882L15.8238 7.74461L18.4375 5.37845L16.2508 3.41842C15.3953 2.5308 14.3782 1.82723 13.2581 1.34836C12.1379 0.869483 10.9371 0.624804 9.725 0.628458C4.63417 0.628458 0.5 4.90168 0.5 10.1284C0.5 15.3552 4.63417 19.6284 9.725 19.6284C12.185 19.6284 14.5083 18.6396 16.1654 16.9268L28.175 5.90819C29.2683 4.77808 30.7204 4.16005 32.275 4.16005C35.4696 4.16005 38.0833 6.8264 38.0833 10.1284C38.0833 13.4305 35.4696 16.0968 32.275 16.0968C30.7375 16.0968 29.2683 15.4788 28.1067 14.2781L26.125 12.4946L23.5625 14.8608L25.7492 16.8385C26.607 17.7216 27.625 18.4211 28.7448 18.8968C29.8646 19.3726 31.0643 19.6152 32.275 19.6108C37.3658 19.6108 41.5 15.3552 41.5 10.1284C41.5 4.83105 37.3658 0.628458 32.275 0.628458Z" fill="#FC4746"/>
            </svg>,
        title: "Or with rules",
        desc: "When you add work to your Slate calendar we automatically calculate useful insights"
    }
]

const Div = styled.div`
    .head-content{
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            width: 11em;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 2rem;
        }
        p{
            width: 22em;
            margin-top: 0;
            font-size: .9rem;
            line-height: 1.3rem;
        }
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr;

        .first-column{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-top: .5em;

            .BigGraph{
                width: 90%;
            }
            .SmallGraph{
                width: 65%;
                position: absolute;
                bottom: -2em;
            }
        }
        .second-column{
            display: flex;
            justify-content: center;
        }
    }

    @media screen and (min-width: 1024px){

        width: 1024px;
        margin: auto;
        .grid{
            grid-template-columns: 1fr .5fr;
            gap: 1em;

            .first-column{
                justify-content: center;
                
                .SmallGraph{
                    right: 0;
                    bottom: 2em;
                    width: 24em;
                }
            }

            .second-column{
                justify-content: flex-start;
            }
        }
    }

`

const FourthSection = () => {
    return (
        <section>
            <Div>
                <div className="head-content">
                    <h2>Features</h2>
                    <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                </div>
                <div className="grid">
                    <div className="first-column">
                        <img className="BigGraph" src={BigGraph} alt="graph" />
                        <img className="SmallGraph" src={SmallGraph} alt="graph" />
                    </div>
                    <div className="second-column">
                        <Feature feature={features}/>
                    </div>
                </div>
            </Div>
        </section>
    )
}

export default FourthSection
