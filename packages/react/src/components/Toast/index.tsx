import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewPort } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRadix.Root> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && (
          <ToastDescription>{description}</ToastDescription>
        )}
        <ToastClose>
          <X weight="light" size={20}></X>
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'

// Agradeço o GB Dev do canal https://www.youtube.com/@GBDev pelo suporte.
