import { Button, Toast, ToastProps } from '@aulas-rocketseat-design-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props}></Toast>
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

// Agradeço o GB Dev do canal https://www.youtube.com/@GBDev pelo suporte.