import { Meta } from '@storybook/react'
import { ColorsGrid } from '../../components/ColorsGrid'

export default {
  title: 'Tokens/Colors',
} as Meta

export function Tokens() {
  return (
    <div style={{ fontFamily: 'Roboto' }}>
      <h1 style={{ fontWeight: 'bolder' }}>Colors</h1>
      <p>Essas são as cores utilizadas no Ignite UI.</p>
      <ColorsGrid></ColorsGrid>
    </div>
  )
}
