import styled,{css} from "styled-components";
import Contacts from "./components/Contacts";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
    height:100vh;
    overflow: hidden;
    position: relative;
`
const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
`
const IntroShape = styled.div`
    ${Shape}
    clip-path: polygon(71% 0%, 46% 100%, 100% 100%, 100% 0%);
    background: rgb(130,126,198);
    background: linear-gradient(-120deg, rgba(130,126,198,1) 0%, rgba(44,91,198,1) 63%, rgba(0,233,255,0.9420810560552346) 100%);
`
const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 56% 0%, 33% 100%, 0% 100%);
    background: pink;
`
const ServiseShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
    background: gray;
`
const PriceShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
    background: crimson;
`

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <> 
    <Container >
      <Navbar/>
      <Intro/>
      <IntroShape/>
    </Container>
    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>
    <Container>
      <Service />
      {!smallScreen && <ServiseShape/>}
    </Container>
    <Container>
      <Price/>
      <PriceShape/>
    </Container>
    <Container>
      <Contacts/>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
