import { FooterWrapper } from './footer-wrapper'
import { FooterDiv } from './footer-div'
import { FooterNav } from './footer-nav'
import { LinksDiv } from './links-div'
import { TextLink } from '../text-link'
import { LogoComponent } from '../logo-div'
import { LinksStyle } from './links-style'
import { Facebook } from '../../icons/facebook'
import { Inst } from '../../icons/inst'
import { Pinterest } from '../../icons/pinterest'
import { Telegramm } from '../../icons/telegramm'

function Footer() {
  return (
    <FooterWrapper>
      <FooterDiv>
        <LogoComponent />
        <FooterNav>
          <ul>
            <LinksStyle>
              <TextLink href="#!">Articles</TextLink>
            </LinksStyle>
            <LinksStyle>
              <TextLink href="#!">About us</TextLink>
            </LinksStyle>
            <LinksStyle>
              <TextLink href="#!">Learn more</TextLink>
            </LinksStyle>
          </ul>
        </FooterNav>
        <LinksDiv>
          <Facebook />
          <Inst />
          <Pinterest />
          <Telegramm />
        </LinksDiv>
      </FooterDiv>
    </FooterWrapper>
  )
}
export default Footer
