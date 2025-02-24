import styled from 'styled-components'

export const NavContainer = styled.nav`
ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
    align-items: center;

    &:last-child {
        margin-right: 120px;
        margin-left: 60px;

    @media (max-width: 768px) {
      margin-left: 90px;
    }
}
`
