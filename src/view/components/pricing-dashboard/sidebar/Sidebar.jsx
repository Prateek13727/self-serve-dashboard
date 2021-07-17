
import {Link} from 'react-router-dom';
import './Sidebar.css';

const SidebarItem = ({to, text}) => {
  return (
    <li className="sidebar-item">
      <Link className="link-item" to={to}>{text}</Link>
    </li>
  )
}
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-items">
        <SidebarItem  to="/" text="Mint" />
        <SidebarItem  to="/stake" text="Stake" />
        <SidebarItem  to="/stats" text="Stats" />
      </ul>
    </nav>
  )
}

export default Sidebar;