import styled from 'styled-components';
import './App.css';
import FirstSection from './modules/FirstSection'
import MacbookImg from './img/macbook.png'
import SecondSection from './modules/SecondSection';
import ThirdSection from './modules/ThirdSection';
import FourthSection from './modules/FourthSection';
import FifthSection from './modules/FifthSection';
import SixthSection from './modules/SixthSection';
import SeventhSection from './modules/SeventhSection';
import EigthSection from './modules/EigthSection';
import Footer from './modules/Footer';

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
        <FirstSection />
        <div className="macBookWrapper">
          <img src={MacbookImg} alt="" className="laptop" />
        </div>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EigthSection />
        <Footer />
      </Div>
    </main>
  );
}

export default App;
