import {
  Tooltip,
  TooltipProps,
  Button,
  Box,
  Text,
} from '@aulas-rocketseat-design-system/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Tooltips',
  component: Tooltip,
  args: {
    children: <Box>Day</Box>,
    content: 'This is a tooltip.',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
        return (
            <Text css = {{
                display: 'flex',
                gap: '$2',
            }}>
                {Story()}
            </Text>
        )
    }
  ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
