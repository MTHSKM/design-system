import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fontSizes } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Font Sizes',
} as Meta

export function Tokens() {
  return (
    <div style={{ fontFamily: 'Roboto', color: '#FFF' }}>
      <h1 style={{ fontWeight: 'bolder' }}>Font Size</h1>
      <p>Essas são as Font Sizes utilizadas no Ignite UI.</p>
      <TokensGrid tokens={fontSizes} hasRemValue></TokensGrid>
    </div>
  )
}
