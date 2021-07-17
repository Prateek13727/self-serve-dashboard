import './Header.css'   
import HeadLogo from './header-logo.svg';

const NavItem = ({href, text}) => {
  return (
    <li className="navbar-item">
      <a className="link-item" href={href}>
        {text}
      </a>
    </li>
  )
}

const Logo = () => {
  return (
    <div>
        <img src={HeadLogo} alt="artha-header-logo"/>
    </div>
  )
}

const Header = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="navbar-menu-items">
        <NavItem href="/" text="Vote" />
        <NavItem href="/" text="Governance" />
        <NavItem href="/" text="Doc" />
        <NavItem href="/app" text="Go to App" />
      </ul>
    </nav>
  )
}

export default Header
