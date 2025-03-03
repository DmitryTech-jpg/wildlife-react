import React from 'react'
import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('img/Hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 420px) {
    width: 100%;
    height: 100%;
  }
`
type TWrapper = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: TWrapper) => {
  return <Background>{children}</Background>
}
