import styled from 'styled-components'

const StyledButton = styled.button`
  width: 50px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  padding: 0;
`

interface ArrowBtnInterface {
  direction?: 'left' | 'right'
  onClick?: () => void
}
const StyledRotationWrapper = styled.div<{ $direction?: string }>`
  width: 100%;
  height: 100%;
  transform: ${({ $direction }) => ($direction === 'left' ? 'rotate(0deg)' : 'rotate(-180deg)')};
`

export const ArrowBtn = ({ direction = 'left', onClick }: ArrowBtnInterface) => (
  <StyledButton onClick={onClick}>
    <StyledRotationWrapper $direction={direction}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 40 70">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.9913 21.2499C27.9913 21.5622 27.8125 21.9138 27.545 22.1484L10.0006 37.4998L27.545 52.8511C27.8131 53.0857 27.9913 53.4368 27.9913 53.7496C27.9913 54.0624 27.8125 54.4135 27.545 54.6481L25.3131 56.601C25.045 56.8356 24.6438 56.9915 24.2863 56.9915C23.9288 56.9915 23.5275 56.8351 23.2594 56.601L2.45563 38.3977C2.1875 38.1631 2.00938 37.812 2.00938 37.4992C2.00938 37.1864 2.18813 36.8353 2.45563 36.6007L23.2594 18.3974C23.5275 18.1628 23.9288 18.007 24.2863 18.007C24.6438 18.007 25.045 18.1634 25.3131 18.3974L27.545 20.3503C27.8131 20.5849 27.9913 20.8972 27.9913 21.2488V21.2499Z"
          fill="#666666"
        />
      </svg>
    </StyledRotationWrapper>
  </StyledButton>
)
