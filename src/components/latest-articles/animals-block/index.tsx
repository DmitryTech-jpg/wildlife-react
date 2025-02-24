import styled from 'styled-components'

export const AnimalsBlock = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
