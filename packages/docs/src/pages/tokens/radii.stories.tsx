import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { radii } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Radiis',
} as Meta

export function Tokens() {
  return (
    <div style={{ fontFamily: 'Roboto', color: '#FFF' }}>
      <h1 style={{ fontWeight: 'bolder' }}>Radii</h1>
      <p>Essas são as Radiis utilizadas no Ignite UI.</p>
      <TokensGrid tokens={radii}></TokensGrid>
    </div>
  )
}
