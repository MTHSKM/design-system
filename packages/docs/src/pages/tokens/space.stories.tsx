import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { space } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Spaces',
} as Meta

export function Tokens() {
  return (
    <div style={{ fontFamily: 'Roboto', color: '#FFF' }}>
      <h1 style={{ fontWeight: 'bolder' }}>Space</h1>
      <p>Essas são as Spaces utilizadas no Ignite UI.</p>
      <TokensGrid tokens={space} hasRemValue></TokensGrid>
    </div>
  )
}
