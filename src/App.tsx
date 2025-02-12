import './index.css'
import { MainDiv } from './components/main-div'
import Header from './components/header'
import { Wrapper } from './components/main/wrapper'
import { Survival } from './components/main/survival'
import { SurvivalSubtitle } from './components/survival-subtitle'
import { SurvivalText } from './components/survival-text'
import { Button } from './components/donate'
import LatestArticles from './components/latest-articles'
import Footer from './components/footer'

function App() {
  return (
    <MainDiv>
      <Wrapper>
        <Header />
        <Survival>
          <SurvivalText>Survival</SurvivalText>
          <SurvivalSubtitle>
            What this means is that we exist to help protect our environment and do in numbers of ways. You can save the
            planet by donation.
          </SurvivalSubtitle>
          <Button>Donate</Button>
        </Survival>
      </Wrapper>
      <LatestArticles />
      <Footer />
    </MainDiv>
  )
}

export default App
