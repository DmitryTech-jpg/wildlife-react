import styled from 'styled-components'

export const EmailContainer = styled.div`
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  width: 600px;
  height: 62px;
  margin-bottom: 240px;

  @media (max-width: 1024px) {
    margin-bottom: 90px;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`
