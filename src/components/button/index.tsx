import styled from 'styled-components'

export const Button = styled.button<{ filled?: boolean }>`
  border: 2px solid #cd6326;
  font-size: 23px;
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  background-color: ${(props) => (props.filled ? '#cd6326' : 'transparent')};
  color: #f7f7f7;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 60px;
`
