import { ContactCTA } from '../ContactCTA'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

export const Header = () => {
  return (
    <div className='c-header'>
      <div className="c-header__logo" >
        <Logo/>
      </div>
      <div className="c-header__menu" >
        <Menu/>
      </div>
      <div className="c-header__contact">
        <ContactCTA/>
      </div>
    </div>
  )
}