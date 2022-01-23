import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    margin-top: 9em;

    h2{
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2rem;
        color: white;
        text-align: center;
    }

    .price-table{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2em;
    }

    .free{
        text-align: center;
        width: fit-content;
        background: white;
        padding: 2em 2.6em;
        border-radius: 10px;

        h3{
            margin: 0;
            font-size: 1.5rem;
        }
        p{
            margin: 0;
            color: #AFAFAF;
        }

        .two-column{
            text-align: left;
            display: flex;
            align-items: center;
            width: fit-content;
            margin: auto;

            .figure{
                font-size: 5rem;
                font-weight: 600;
            }
            .currency{
                margin-left: 0.4em;
                .symbol{
                    font-size: 1.5rem;
                    font-weight: 600;
                    line-height: 1rem;
                }
                .permonth{
                    line-height: 1.8rem;
                    color: #AFAFAF;
                    font-weight: 300;
                }
            }
        }

        .items{
            margin-top: -.7em;
            ul{
                padding-left: 0;
                margin: 0;
                li{
                    list-style-type: none;
                    margin: 1em;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
            }
        }

        .order-now-button{
            background: #1EA7F3;
            color: white;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 1em 3em;
            margin: 2em 0 1em;
            border-radius: 10px;
        }
    } 
    .standard{
        text-align: center;
        width: fit-content;
        background: #1EA7F3;
        padding: 2em 3.7em;
        border-radius: 10px;
        color: white;

        h3{
            margin: 0;
            font-size: 1.5rem;
        }
        p{
            margin: 0;
        }

        .two-column{
            text-align: left;
            display: flex;
            align-items: center;
            width: fit-content;
            margin: auto;

            .figure{
                font-size: 5rem;
                font-weight: 600;
            }
            .currency{
                margin-left: 0.4em;
                .symbol{
                    font-size: 1.5rem;
                    font-weight: 600;
                    line-height: 1rem;
                }
                .permonth{
                    line-height: 1.8rem;
                    font-weight: 300;
                }
            }
        }

        .items{
            margin-top: -.7em;
            ul{
                padding-left: 0;
                margin: 0;
                li{
                    list-style-type: none;
                    margin: 1em;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
            }
        }

        .order-now-button{
            background: white;
            font-weight: 800;
            font-size: 0.9rem;
            padding: 1em 3em;
            margin: 2em 0 1em;
            border-radius: 10px;
            color: #1EA7F3;
        }
    }
    .premium{
        text-align: center;
        width: fit-content;
        background: white;
        padding: 2em 2.6em;
        border-radius: 10px;

        h3{
            margin: 0;
            font-size: 1.5rem;
        }
        p{
            margin: 0;
            color: #AFAFAF;
        }

        .two-column{
            text-align: left;
            display: flex;
            align-items: center;
            width: fit-content;
            margin: auto;

            .figure{
                font-size: 5rem;
                font-weight: 600;
                letter-spacing: -0.1em;
            }
            .currency{
                margin-left: 1em;
                .symbol{
                    font-size: 1.5rem;
                    font-weight: 600;
                    line-height: 1rem;
                }
                .permonth{
                    line-height: 1.8rem;
                    color: #AFAFAF;
                    font-weight: 300;
                }
            }
        }

        .items{
            margin-top: -.7em;
            ul{
                padding-left: 0;
                margin: 0;
                li{
                    list-style-type: none;
                    margin: 1em;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
            }
        }

        .order-now-button{
            background: #1EA7F3;
            color: white;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 1em 3em;
            margin: 2em 0 1em;
            border-radius: 10px;
        }
    }

    @media screen and (min-width: 768px){
        .price-table{
            flex-direction: row;
            justify-content: center;
            gap: 0.5em;
        }
        .free{
            padding: 2em 2em;
        }
        .standard{
            padding: 3em 2em;
        }
        .premium{
            padding: 2em 2em;
        }
    }

    @media screen and (min-width: 1024px){
        .price-table{
            flex-direction: row;
            justify-content: center;
            gap: 1em;
            width: 1024px;
            margin: auto;
            margin-top: 3em;
        }
        .free{
            padding: 3em 3em;
        }
        .standard{
            padding: 5em 5em;
        }
        .premium{
            padding: 3em 3em;
        }
    }
`

const EigthSection = () => {
  return(
        <section>
            <Div>
                <h2>Price Tables</h2>
                <div className="price-table">
                    <div className="free">
                        <h3>Free</h3>
                        <p>Brief Price Description</p>
                        <div className="two-column">
                            <div className="price">
                                <div className="figure">0</div>
                            </div>
                            <div className="currency">
                                <div className="symbol">$</div>
                                <div className="permonth">Per/ month</div>
                            </div>
                        </div>
                        <div className="items">
                            <ul>
                                <li>Price Item One</li>
                                <li>Price Item Two</li>
                                <li>Price Item Three</li>
                            </ul>
                        </div>
                        <div className="order-now-button">Order Now</div>
                    </div>
                    <div className="standard">
                        <h3>Standard</h3>
                        <p>Brief Price Description</p>
                        <div className="two-column">
                            <div className="price">
                                <div className="figure">10</div>
                            </div>
                            <div className="currency">
                                <div className="symbol">$</div>
                                <div className="permonth">Per/ month</div>
                            </div>
                        </div>
                        <div className="items">
                            <ul>
                                <li>Price Item One</li>
                                <li>Price Item Two</li>
                                <li>Price Item Three</li>
                            </ul>
                        </div>
                        <div className="order-now-button">Order Now</div>
                    </div>
                    <div className="premium">
                        <h3>Premium</h3>
                        <p>Brief Price Description</p>
                        <div className="two-column">
                            <div className="price">
                                <div className="figure">99</div>
                            </div>
                            <div className="currency">
                                <div className="symbol">$</div>
                                <div className="permonth">Per/ month</div>
                            </div>
                        </div>
                        <div className="items">
                            <ul>
                                <li>Price Item One</li>
                                <li>Price Item Two</li>
                                <li>Price Item Three</li>
                            </ul>
                        </div>
                        <div className="order-now-button">Order Now</div>
                    </div>
                </div>
            </Div>
        </section>
  );
};

export default EigthSection;
