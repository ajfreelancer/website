import React from 'react';
import styled from 'styled-components';

const Div = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 65%;
    margin: 4em auto;

    h3{
        color: white;
        line-height: 1.5rem;
    }
    ul{
        list-style-type: none;
        padding-left: 0;
        margin-top: 1.8em;

        li{
            margin: 0.6em 0;
            a{
                text-decoration: none;
                color: #AFAFAF;
                font-size: 0.9rem;
            }
        }
    }

    .newsletter{
        color: white;

        h3{
            width: 8em;
        }
        p{
            color: #AFAFAF;
            font-size: 0.85rem;
        }
        .email-input{
            margin-top: 1.5em;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: .5em;

            input{
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                width: 90%;
                padding: 1.1em 1.5em;
                border-radius: 7px;

                ::placeholder{
                    color: #AFAFAF;
                }
            }
            .email-button{
                font-weight: 500;
                background: #FC4746;
                border-radius: 10px;
                width: 87%;
                padding: .8em 1.5em;
                text-align: center;
            }
        }

        .social-icons{
            display: flex;
            justify-content: center;
            gap: 1.5em;
            margin-top: 2em;
            align-items: center;

            svg{
                width: 1.7em;
            }
        }
    }

    @media screen and (min-width: 768px){
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        
        .newsletter{
            .email-input{
                align-items: flex-start;
                
                .email-button{
                    width: 89.5%;
                }
            }
            .social-icons{
                justify-content: flex-start;
            }
        }
    }
    @media screen and (min-width: 1024px){
        
        flex-wrap: nowrap;
        width: 900px;

        ul{
            li{
                margin: 1em 0;
            }
        }

        .newsletter{
            width: 370px;
            align-items: flex-start;

            h3{
                width: auto;
            }
            .email-input{
                flex-direction: row;
                margin-top: 1em;

                .email-button{
                    width: 30%;
                }
            }
            .social-icons{
                margin-top: 1.2em;
                justify-content: flex-start;
            }
        }
    }
`

const Footer = () => {
  return(
    <footer>
        <Div>
            <div className="fingertipe">
                <h3>Fingertipe</h3>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Updates</a></li>
                    </ul>
                </nav>
            </div>
            <div className="resources">
                <h3>Resources</h3>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Updates</a></li>
                    </ul>
                </nav>
            </div>
            <div className="about">
                <h3>About</h3>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Updates</a></li>
                    </ul>
                </nav>
            </div>
            <div className="newsletter">
                <h3>Subscribe to our newsletter</h3>
                <p>Slate helps you see how many more days to work to reach your financial </p>
                <div className="email-input">
                    <input type="text" placeholder='Email Address'/>
                    <div className="email-button">Subscribe</div>
                </div>
                <div className="social-icons">
                    <a href="https://www.twitter.com">
                        <svg viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.665 4.08129C32.4402 4.60963 31.1074 4.98988 29.7345 5.13798C31.1599 4.29117 32.2273 2.95336 32.7364 1.37553C31.3989 2.17121 29.9336 2.72915 28.4056 3.0246C27.767 2.34187 26.9946 1.79797 26.1366 1.4268C25.2785 1.05563 24.3533 0.865139 23.4184 0.867204C19.6359 0.867204 16.594 3.93319 16.594 7.69563C16.594 8.22398 16.658 8.75232 16.7621 9.26065C11.0984 8.96446 6.04713 6.2587 2.68895 2.11601C2.07705 3.16115 1.7564 4.35117 1.76034 5.56225C1.76034 7.93179 2.96513 10.0211 4.80232 11.2499C3.71963 11.2073 2.6623 10.9097 1.71632 10.3814V10.4654C1.71632 13.7836 4.06184 16.5334 7.18787 17.1658C6.60092 17.3182 5.99712 17.3962 5.3907 17.3979C4.94641 17.3979 4.52614 17.3539 4.10186 17.2939C4.96642 19.9996 7.48406 21.9649 10.482 22.0289C8.13648 23.8661 5.19858 24.9468 2.00851 24.9468C1.43613 24.9468 0.907792 24.9268 0.359436 24.8628C3.3854 26.804 6.97573 27.9248 10.8422 27.9248C23.3944 27.9248 30.2628 17.526 30.2628 8.50016C30.2628 8.20397 30.2628 7.90777 30.2428 7.61158C31.5717 6.63895 32.7364 5.43417 33.665 4.08129Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com">
                        <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7103 0.48291H2.25117C1.54271 0.48291 0.970337 1.05528 0.970337 1.76374V31.2229C0.970337 31.9313 1.54271 32.5037 2.25117 32.5037H31.7103C32.4187 32.5037 32.9911 31.9313 32.9911 31.2229V1.76374C32.9911 1.05528 32.4187 0.48291 31.7103 0.48291ZM28.0119 9.82897H25.4542C23.4489 9.82897 23.0607 10.7816 23.0607 12.1825V15.2685H27.8478L27.2234 20.0996H23.0607V32.5037H18.0694V20.1036H13.8947V15.2685H18.0694V11.7062C18.0694 7.57151 20.5951 5.31805 24.2855 5.31805C26.0546 5.31805 27.5716 5.45013 28.0159 5.51017V9.82897H28.0119Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com">
                        <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.6981 0.48291H2.23896C1.5305 0.48291 0.95813 1.05528 0.95813 1.76374V31.2229C0.95813 31.9313 1.5305 32.5037 2.23896 32.5037H31.6981C32.4065 32.5037 32.9789 31.9313 32.9789 31.2229V1.76374C32.9789 1.05528 32.4065 0.48291 31.6981 0.48291ZM10.4563 27.7686H5.70521V12.4867H10.4563V27.7686ZM8.08275 10.3973C7.53811 10.3973 7.00569 10.2358 6.55283 9.93325C6.09997 9.63066 5.74701 9.20057 5.53859 8.69738C5.33016 8.1942 5.27562 7.6405 5.38188 7.10632C5.48813 6.57214 5.75041 6.08146 6.13553 5.69634C6.52066 5.31121 7.01133 5.04894 7.54552 4.94268C8.0797 4.83643 8.63339 4.89096 9.13658 5.09939C9.63977 5.30782 10.0699 5.66078 10.3724 6.11363C10.675 6.56649 10.8365 7.09891 10.8365 7.64356C10.8325 9.16454 9.59974 10.3973 8.08275 10.3973ZM28.2438 27.7686H23.4968V20.3358C23.4968 18.5626 23.4647 16.2852 21.0272 16.2852C18.5576 16.2852 18.1773 18.2144 18.1773 20.2077V27.7686H13.4342V12.4867H17.9892V14.5761H18.0532C18.6856 13.3753 20.2346 12.1065 22.5481 12.1065C27.3593 12.1065 28.2438 15.2725 28.2438 19.3872V27.7686V27.7686Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </Div>
    </footer>
  );
};

export default Footer;
