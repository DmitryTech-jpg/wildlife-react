import React from 'react'
import styled from 'styled-components'

const CardImage = styled.img`
  width: 300px;
  height: 360px;
  object-fit: cover;
`
const CardContainer = styled.div`
  width: 300px;
  height: 360px;
  overflow: hidden;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex;
`

const Title = styled.h4`
  font-family: 'Open Sans';
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  color: #f7f7f7;
  text-align: center;
`

const Subtitle = styled.h4`
  margin: 0;
  font-family: 'Open Sans';
  font-weight: 400;
  font-style: normal;
  font-size: 17px;
  color: #f7f7f7;
  text-align: center;
  padding-bottom: 20px;
`

interface CardProps {
  title: string
  subtitle: string
  imagePath: string
}

export const Card: React.FC<CardProps> = ({ title, subtitle, imagePath }) => {
  return (
    <CardContainer>
      <CardImage src={imagePath} alt={title} />
      <Overlay>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Overlay>
    </CardContainer>
  )
}
