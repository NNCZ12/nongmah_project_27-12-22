import {React, createContext } from 'react'

export const ModalContext = createContext({
    isOpen: false,
    toggleModal:()
}) => {
  return (
    <div>ModalContext</div>
  )
}
