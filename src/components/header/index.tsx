import styled from 'styled-components'
import { NavContainer } from '../main/nav-container'
import { Navi } from '../main/navi'
import { Magnifier } from '../../icons/magnifier'
import { LogoComponent } from '../logo-container'
import { Button } from '../button'
import { TextLink } from '../text-link'

const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`

function Header() {
  return (
    <HeaderDiv>
      <LogoComponent />

      <NavContainer>
        <ul>
          <Navi>
            <TextLink href="#articles">Articles</TextLink>
            <TextLink href="#telegramm">Contacts</TextLink>
          </Navi>
          <li>
            <Magnifier />
          </li>
          <li>
            <TextLink href="#https://www.google.com/">
              <Button>Sign in</Button>
            </TextLink>
          </li>
        </ul>
      </NavContainer>
    </HeaderDiv>
  )
}
export default Header
