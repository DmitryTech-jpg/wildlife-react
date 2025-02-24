import styled from 'styled-components'
import { Logo } from '../../icons/Logo'
import { Title } from '../main/title'

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 120px;

  @media (max-width: 768px) {
    margin-left: 60px;
  }
`

export function LogoComponent() {
  return (
    <LogoContainer>
      <Logo />
      <Title>WILDLIFE</Title>
    </LogoContainer>
  )
}
