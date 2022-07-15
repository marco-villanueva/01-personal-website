import React from 'react'
import { ContactCTA } from '../ContactCTA'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

export const Header = () => {
  return (
    <div>
      <Logo/>
      <Menu />
      <ContactCTA />
    </div>
  )
}