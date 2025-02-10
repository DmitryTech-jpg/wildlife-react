import styled from 'styled-components'

export const LinkStyle = styled.a`
  color: white;
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-size: 23px;
`
interface LinkProps {
  children: React.ReactNode
  href?: string
  target?: string
}

export function TextLink({ children, href, target }: LinkProps) {
  return (
    <LinkStyle href={href} target={target}>
      {children}
    </LinkStyle>
  )
}
