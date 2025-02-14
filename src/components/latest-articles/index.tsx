import React, { useState } from 'react'
import { Title } from './title'
import { Subtitle } from './subtitle'
import { Wrapper } from './wrapper'
import { SliderDiv } from './slider'
import { SubmitButton } from './send-button'
import { EmailDiv } from './email-div'
import { EmailInput } from './email-input'
import { AnimalsBlock } from './animals-block'
import { EmailSubtitle } from './email-subtitle'
import { Card } from './animals-card'
import { ArrowBtn } from './arrow-slide'

interface CardProps {
  title: string
  subtitle: string
  imagePath: string
}

function LatestArticles() {
  const [cards, setCards] = useState<CardProps[]>([
    {
      title: 'Deer',
      subtitle: 'Naturalist investigation',
      imagePath: 'img/Deer.png'
    },
    {
      title: 'Squirrel',
      subtitle: 'Kamikaze squirrels',
      imagePath: 'img/Squirrel.png'
    },
    {
      title: 'Bird',
      subtitle: 'Birds fight club',
      imagePath: 'img/Bird.png'
    }
  ])
  const [email, setEmail] = useState<string>('')
  const handleNext = () => {
    setCards((prevCards) => [...prevCards.slice(1), prevCards[0]])
  }
  const handlePrev = () => {
    setCards((prevCards) => [prevCards[prevCards.length - 1], ...prevCards.slice(0, -1)])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      alert(`You successfully send message to ${email}!`)
      setEmail('')
    } else {
      alert('Please enter a valid email address.')
    }
  }

  return (
    <Wrapper>
      <Title>
        <a id="articles">Latest articles</a>
      </Title>
      <Subtitle>Breaking news from the wild</Subtitle>
      <SliderDiv>
        <ArrowBtn direction="left" onClick={handlePrev} />
        <AnimalsBlock>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} subtitle={card.subtitle} imagePath={card.imagePath} />
          ))}
        </AnimalsBlock>
        <ArrowBtn direction="right" onClick={handleNext} />
      </SliderDiv>
      <EmailSubtitle id="email">Get notified about new amazing articles</EmailSubtitle>
      <form onSubmit={handleSubmit}>
        <EmailDiv>
          <EmailInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <SubmitButton type="submit">Send</SubmitButton>
        </EmailDiv>
      </form>
    </Wrapper>
  )
}
export default LatestArticles
