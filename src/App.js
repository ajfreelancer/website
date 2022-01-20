import styled from 'styled-components';
import './App.css';
import FirstSection from './modules/FirstSection'
import MacbookImg from './img/macbook.png'
import SecondSection from './modules/SecondSection';
import ThirdSection from './modules/ThirdSection';

const Div = styled.div`
  font-family: 'Poppins',sans-serif;
  
  .macBookWrapper{
    display: flex;
    justify-content: center;
    margin-top: -10em;
  }
  .laptop{
    width: 90%;
  }

  @media screen and (min-width: 768px){
    .macBookWrapper{
      margin-top: -13em;
    }
  }
  @media screen and (min-width: 1024px){
    .laptop{
      width: 700px;
    }
  }
`

function App() {
  return (
    <main>
      <Div>
        <div className="firstSection">
          <FirstSection />
        </div>
        <div className="macBookWrapper">
          <img src={MacbookImg} alt="" className="laptop" />
        </div>
        <div className="secondSection">
          <SecondSection />
        </div>
        <div className="thirdSection">
          <ThirdSection />
        </div>
      </Div>
    </main>
  );
}

export default App;
