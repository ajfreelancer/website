import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;

    .partner{
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 80%;
        border-radius: 10px;
        margin-bottom: 1em;
        padding: 1.3em 0;

        .first-column{
            display: flex;
            flex-direction: column;
            align-items: center;
            
            svg{
                width: 4em;
            }

            .name{
                font-size: .9rem;
                font-weight: 500;
            }
        }

        .second-column{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            p{
                font-size: .8rem;
                width: 18em;
                margin-top: 2em;
            }
        }
    }

    @media screen and (min-width: 768px){
        
        flex-direction: row;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;

        
        .partner{
            width: 20em;
            height: 15em;
            justify-content: center;
            margin-bottom: 0;   
        }
    }

    @media screen and (min-width: 990px){

        width: 990px;
        margin: 2em auto;
        
        .partner{
            flex-direction: row;
            height: 7em;
            width: auto;
            padding: 2em 3.4em;

            .first-column{
                margin-bottom: 0;
                justify-content: center;
                text-align: center;

                p{
                    margin-top: 0;
                }

                svg{
                    width: 5em;
                }
            }
            .second-column{
                text-align: left;
                margin-left: 1.5em;
                p{
                    margin: 0;
                }
            }
        }
    }
`

const PartnerCard = ({data}) => {
    
  return(
      <Div>
          {
              data.map((v, k) => {
                const {name, svg, desc} = v;
                return(
                    <div className="partner" key={k}>
                        <div className="first-column">
                            <p className="name">{name}</p>
                            {svg}
                        </div>
                        <div className="second-column">
                            <p>{desc}</p>
                        </div>
                    </div>
                )
              })
          }
      </Div>
  )
};

export default PartnerCard;
