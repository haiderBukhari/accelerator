import './App.css'
import Routes from './Routes'
import AsideNavbar from './components/asideNavbar'
import { useLocation } from 'react-router-dom'
import AsideSettings from './components/asideSettings';
import AsideMessages from './pages/Messages/asideMessages';

function App() {
  const location = useLocation();
  const currentLocation = location.pathname === '/dashboard/home' || location.pathname === '/dashboard/groups' || location.pathname.includes('/dashboard/messages') || location.pathname === '/dashboard/members' || location.pathname === '/dashboard/events' || location.pathname === '/dashboard/course' || location.pathname === '/home' || location.pathname === '/dashboard/details/groups' || location.pathname === '/dashboard/course/details';
  return (
    <div className={`${currentLocation && 'flex min-h-screen'}`}>
      {currentLocation ? <AsideNavbar /> : null}
      {location.pathname !== '/home' ? <Routes /> : null}
      {(currentLocation && !location.pathname.includes('/dashboard/messages') && location.pathname!== '/dashboard/members' && !location.pathname.includes('/dashboard/course') && !location.pathname.includes('dashboard/details/groups') && location.pathname !== '/dashboard/course/details' && location.pathname !== '/dashboard/events') ? <AsideSettings /> : null}
      {
        (currentLocation && !location.pathname.includes('/dashboard/messages') && location.pathname!== '/dashboard/members' && !location.pathname.includes('/dashboard/course') && location.pathname !== '/dashboard/events') && <AsideMessages/>
      }
    </div>
  )
}

export default App
