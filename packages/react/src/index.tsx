// import { colors } from '@ignite-ui/tokens'

// console.log(colors)

import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return <Button>Hello World!</Button>
}
