import styled from 'styled-components'

export const FooterNav = styled.nav`
  ul {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    gap: 90px;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      margin-left: 0px;
  }
`
