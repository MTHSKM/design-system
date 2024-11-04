import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fontWeights } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Font Weights',
} as Meta

export function Tokens() {
  return (
    <div style={{ fontFamily: 'Roboto', color: '#FFF' }}>
      <h1 style={{ fontWeight: 'bolder' }}>Font Weight</h1>
      <p>Essas são as Font Weights utilizadas no Ignite UI.</p>
      <TokensGrid tokens={fontWeights}></TokensGrid>
    </div>
  )
}
