import styled from 'styled-components'

export const LinksContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 27px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-left: 90px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-left: 50px;
  }
`
