import { color } from 'styled-system'
import styled from 'styled-components'

const Icon = styled.svg`${color};`

export default ({ children, ...props }) =>
  <Icon
    xmlns='http://www.w3.org/2000/svg'
    width='37'
    height='24'
    viewBox='0 0 62 42'
    {...props}
  >
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      d='M2 18h50c4.4 0 8-3.6 8-8v-.6c0-4-3.3-7.4-7.4-7.4-4 0-7.4 3.3-7.4 7.4v.8M8 12h21.3M10 24h29c4.4 0 8 3.6 8 8v.6c0 4-3.3 7.4-7.4 7.4-4 0-7.4-3.3-7.4-7.4v-.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    {children}
  </Icon>
