import './index.css'
import { RootContainer } from './components/root-container'
import { useState } from 'react'
import { Modal } from './components/modal-container'
import Header from './components/header'
import { Wrapper } from './components/main/wrapper'
import { Survival } from './components/main/survival'
import { SurvivalSubtitle } from './components/survival-subtitle'
import { SurvivalText } from './components/survival-text'
import { Button } from './components/donate'
import LatestArticles from './components/latest-articles'
import Footer from './components/footer'

function App() {
  const [isModalActive, setModalActive] = useState<boolean>(false)

  return (
    <RootContainer>
      <Wrapper>
        <Header />
        <Modal active={isModalActive} setActive={setModalActive} />
        <Survival>
          <SurvivalText>Survival</SurvivalText>
          <SurvivalSubtitle>
            What this means is that we exist to help protect our environment and do in numbers of ways. You can save the
            planet by donation.
          </SurvivalSubtitle>
          <Button filled onClick={() => setModalActive(true)}>
            Donate
          </Button>
        </Survival>
      </Wrapper>
      <LatestArticles />
      <Footer />
    </RootContainer>
  )
}

export default App
