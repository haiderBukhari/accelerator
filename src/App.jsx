import './App.css'
import Routes from  './Routes'
import AsideNavbar from './components/asideNavbar'
import { useLocation } from 'react-router-dom'
import AsideSettings from './components/asideSettings';

function App() {
  const location = useLocation();
  const currentLocation = location.pathname === '/dashboard/home' || location.pathname === '/dashboard/groups' || location.pathname === '/dashboard/messages' || location.pathname === '/dashboard/members' || location.pathname === '/dashboard/events' || location.pathname === '/dashboard/course' || location.pathname === '/home';
  return (
    <div className={`${currentLocation && 'flex min-h-screen'}`}>
      {currentLocation ? <AsideNavbar/> : null}
      {location.pathname !== '/home' ? <Routes/> : null}
      {currentLocation ? <AsideSettings/> : null}
    </div>
  )
}

export default App
