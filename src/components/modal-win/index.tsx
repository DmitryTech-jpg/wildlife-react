import styled from 'styled-components'
import { useState } from 'react'
import { ModalInput } from '../modal-input'

interface PopupOverlayProps {
  show: boolean
}

interface ModalContainerProps {
  active: boolean
  setActive: (value: boolean) => void
}

const ModalWin = styled.div<PopupOverlayProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
  margin: 20vh auto;
  padding: 32px;
  border: 1px solid #888;
  border-radius: 15px;
  width: 480px;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.1),
    0 10px 10px rgba(0, 0, 0, 0.05);
`

const Donate = styled.h3`
  margin-top: 16px;
  margin-bottom: 32px;
  font-family: 'Open Sans', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`

const Label = styled.label`
  width: 399px;
  height: 65px;
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  color: #bdbdbd;
  margin-bottom: 8px;
`

const InputField = styled.input`
  width: 399px;
  background: transparent;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  border: 0;
  border-bottom: 2px solid #bdbdbd;
  color: #bdbdbd;
  margin-bottom: 32px;
  &::placeholder {
    color: #bdbdbd;
  }
`

const Textarea = styled.textarea`
  width: 399px;
  height: 135px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  border: 2px solid #bdbdbd;
  resize: vertical;
  max-height: 200px;
  margin-bottom: 32px;
  &::placeholder {
    color: #bdbdbd;
  }
`

const ModalBtn = styled.button`
  width: 399px;
  height: 66px;
  background-color: #e39128;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26.95px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f7f7f7;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ff9f43;
  }
`

export const ModalDiv: React.FC<ModalContainerProps> = ({ active, setActive }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [comment, setComment] = useState('')

  const onSend = () => {
    if (!name || !amount || !comment) {
      alert('Please fill in all fields')
      return
    }
    window.alert(`You successfully sent a donation of

$${amount} from ${name}, with comment "${comment}"`)
    setActive(false)
  }

  return (
    <ModalWin show={active}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Donate>Donate</Donate>
        <Label htmlFor="your-name">Your Name:</Label>
        <InputField
          id="your-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
        />
        <Label htmlFor="amount">Amount ($):</Label>
        <InputField
          id="amount"
          type="number"
          min="0"
          step="any"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Enter the amount..."
        />
        <Label htmlFor="comment">Your Comment:</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment here..."
        ></Textarea>
        <ModalBtn onClick={onSend}>Send</ModalBtn>
      </ModalContent>
    </ModalWin>
  )
}
