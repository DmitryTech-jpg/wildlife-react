import './index.css'
import Header from './components/header'
import { Wrapper } from './components/main/Wrapper'
import { Survival } from './components/main/Survival'
import { SurvivalSubtitle } from './components/SurvivalSubtitle'
import { SurvivalText } from './components/SurvivalText'
import { Button } from './components/donate'

function App() {
  return (
    <Wrapper>
      <Header />
      <Survival>
        <SurvivalText>Survival</SurvivalText>
        <SurvivalSubtitle>
          What this means is that we exist to help protect our environment and do in numbers of ways. You can save the planet
          by donation.
        </SurvivalSubtitle>
        <Button>Donate</Button>
      </Survival>
    </Wrapper>
  )
}

export default App
