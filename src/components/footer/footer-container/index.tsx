import styled from 'styled-components'

export const FooterContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 90px;

  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`
