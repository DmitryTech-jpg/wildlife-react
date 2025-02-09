import styled from 'styled-components'
import { NavDiv } from '../main/NavDiv'
import { Navi } from '../main/Navi'
import { Magnifier } from '../../icons/Magnifier'
import { LogoComponent } from '../logo-div'
import { Button } from '../button'
import { TextLink } from '../text-link'

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: 15px;
`

function Header() {
  return (
    <HeaderContainer>
      <LogoComponent />

      <NavDiv>
        <ul>
          <Navi>
            <TextLink href="#articles">Articles</TextLink>
            <TextLink href="#contacts">Contacts</TextLink>
          </Navi>
          <li>
            <Magnifier />
          </li>
          <li>
            <TextLink href="#!">
              <Button>Sign in</Button>
            </TextLink>
          </li>
        </ul>
      </NavDiv>
    </HeaderContainer>
  )
}
export default Header
