import { Header } from '../components/Header'

const Layout = ({ children }) => {
  return (
      <div className='o-layout'>
        <div className='o-layout__container'>
          <Header />
          {children}
        </div>
      </div>
  )
}

export default Layout