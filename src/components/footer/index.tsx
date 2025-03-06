import { FooterWrapper } from './footer-wrapper'
import { FooterContainer } from './footer-container'
import { FooterNav } from './footer-nav'
import { LinksContainer } from './links-container'
import { TextLink } from '../text-link'
import { LogoComponent } from '../logo-container'
import { LinksStyle } from './links-style'
import { Facebook } from '../../icons/facebook'
import { Inst } from '../../icons/inst'
import { Pinterest } from '../../icons/pinterest'
import { Telegramm } from '../../icons/telegram'

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoComponent />
        <FooterNav>
          <ul>
            <LinksStyle>
              <TextLink href="#articles">Articles</TextLink>
            </LinksStyle>
            <LinksStyle>
              <TextLink href="#about">About us</TextLink>
            </LinksStyle>
            <LinksStyle>
              <TextLink href="#https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0">
                Learn more
              </TextLink>
            </LinksStyle>
          </ul>
        </FooterNav>
        <LinksContainer>
          <Facebook />
          <Inst />
          <Pinterest />
          <Telegramm />
        </LinksContainer>
      </FooterContainer>
    </FooterWrapper>
  )
}
export default Footer
