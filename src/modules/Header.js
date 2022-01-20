import React from 'react'
import styled from 'styled-components'
import logo from "../img/logo.png"

const Div = styled.div`
    header{
        display: flex;
        margin: 1.5em;
        justify-content: space-between;
        align-items: center;
    
        .logo{
            width: 10em;
        }

        nav{
            position: fixed;
            background-color: white;
            top: 0;
            right: 0;
            height: 100vh;
            width: 60%;
            z-index: 999;
            transition: transform 0.3s;
            transform: translateX(100%);

            ul{
                list-style-type: none;
                padding: 0;
                margin-top: 6em;

                li a{
                    text-decoration: none;
                    font-size: 0.9rem;
                    color: #131720;
                    font-weight: 500;
                    display: block;
                    padding: 1em 2em;
                    
                    &:hover{
                        background-color: #CCCCCC;
                    }
                }
            }

            .exitMenuButton{
                width: 2em;
                position: fixed;
                right: 0;
                margin: 30px 20px;
            }
        }

        .menuIcon{
            width: 1.7em;
            cursor: pointer;
            user-select: none;
            transform: scaleY(1.2);
            user-select: none;
        }

        .sign-up-button{
            color: white;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid white;
            height: fit-content;
            padding: 0.6em .8em;
            border-radius: 0.6em;
            cursor: pointer;
            width: fit-content;
            user-select: none;

            &:active{
                background-color: #FFF;
                color: #131720;
            }
            &:hover{
                background-color: #FFF;
                color: #131720;
            }
        }
    }

    @media screen and (min-width: 375px) {
        header{
            .sign-up-button{
                font-size: .85rem;
                padding: 0.6em 1.6em;
            }
        }
    }

    @media screen and (min-width: 550px) {
        header{
            display: grid;
            grid-template-columns: 3fr 1fr .1fr;

            .menuIcon{
                justify-self: flex-end;
            }
        }
    }

    @media screen and (min-width: 700px) {
        header{
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            gap: 2em;

            .logo{
                order: 1;
            }

            .menuIcon{
                display: none;
            }

            .sign-up-button{
                justify-self: flex-end;
                order: 3;
            }

            nav{
                order: 2;
                position: unset;
                background-color: transparent;
                height: auto;
                width: 80%;
                transition: transform 0.3s;
                transform: translateX(0);
                margin: auto;

                ul{
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    li{
                        display: inline;
                    }

                    li a{
                        color: white;
                        display: inline;
                        padding: 0;
                        font-weight: 400;
                        font-size: .85rem;
                        
                        &:hover{
                            background-color: transparent;
                            font-weight: 600;
                        }
                    }
                }

                .exitMenuButton{
                    display: none;
                }
            }
        }
    }

    @media screen and (min-width: 900px) {

        margin: 0 2em;

        #navigation{
            width: 20em;
        }
    }

    @media screen and (min-width: 1200px) {

        margin: auto;
        width: 1200px;

    }
`

const showMenu = () => {
    const navMenu = document.getElementById("navigation");
    navMenu.style.transform = "translateX(0%)";
}
const hideMenu = () => {
    const navMenu = document.getElementById("navigation");
    navMenu.style.transform = "translateX(100%)";
}

const Header = () => {
    return (
        <Div className="wrapper">
            <header>
                <img className="logo" src={logo} alt="FigmaLand" />
                <span className="sign-up-button">Sign Up</span>
                <nav id='navigation'>
                    <svg className='exitMenuButton' onClick={hideMenu} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1 3.90001C14.2 6.19888e-06 7.79998 6.19888e-06 3.89998 3.90001C-2.43187e-05 7.80001 -2.43187e-05 14.2 3.89998 18.1C7.79998 22 14.1 22 18 18.1C21.9 14.2 22 7.80001 18.1 3.90001ZM13.8 15.2L11 12.4L8.19998 15.2L6.79998 13.8L9.59998 11L6.79998 8.20001L8.19998 6.80001L11 9.60001L13.8 6.80001L15.2 8.20001L12.4 11L15.2 13.8L13.8 15.2Z" fill="#131720"/>
                    </svg>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <svg className='menuIcon' onClick={showMenu} viewBox="0 0 44 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.25H44V4.66667H0V0.25ZM11 11.2917H44V15.7083H11V11.2917ZM24.75 22.3333H44V26.75H24.75V22.3333Z" fill="white"/>
                </svg>
            </header>
        </Div>
    )
}

export default Header
