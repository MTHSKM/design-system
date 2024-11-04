import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { lineHeights } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Line Heights',
} as Meta

export function Tokens() {
  return (
    <div style={{ fontFamily: 'Roboto', color: '#FFF' }}>
      <h1 style={{ fontWeight: 'bolder' }}>Line Height</h1>
      <p>Essas são as Line Heigths utilizadas no Ignite UI.</p>
      <TokensGrid tokens={lineHeights}></TokensGrid>
    </div>
  )
}
