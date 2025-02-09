import React from 'react'
import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  background-image: url('img/Hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
type TWrapper = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: TWrapper) => {
  return <Background>{children}</Background>
}
