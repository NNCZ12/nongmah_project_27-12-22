import {React, createContext } from 'react'

export const ModalContext = createContext({
    isOpen: false,
    toggle
}) => {
  return (
    <div>ModalContext</div>
  )
}
