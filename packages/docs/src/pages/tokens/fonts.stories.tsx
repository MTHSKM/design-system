import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fonts } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Font Families',
} as Meta

export function Tokens() {
  return (
    <div style={{ fontFamily: 'Roboto', color: '#FFF' }}>
      <h1 style={{ fontWeight: 'bolder' }}>Font Familly</h1>
      <p>Essas são as Fonts utilizadas no Ignite UI.</p>
      <TokensGrid tokens={fonts}></TokensGrid>
    </div>
  )
}
