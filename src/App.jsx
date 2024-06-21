import './App.css'
import Routes from './Routes'
import AsideNavbar from './components/asideNavbar'
import { useLocation } from 'react-router-dom'
import AsideSettings from './components/asideSettings';

function App() {
  const location = useLocation();
  const currentLocation = location.pathname === '/dashboard/home' || location.pathname === '/dashboard/groups' || location.pathname.includes('/dashboard/messages') || location.pathname === '/dashboard/members' || location.pathname === '/dashboard/events' || location.pathname === '/dashboard/course' || location.pathname === '/home';
  return (
    <div className={`${currentLocation && 'flex min-h-screen'}`}>
      {currentLocation ? <AsideNavbar /> : null}
      {location.pathname !== '/home' ? <Routes /> : null}
      {(currentLocation && !location.pathname.includes('/dashboard/messages') && location.pathname!== '/dashboard/members') ? <AsideSettings /> : null}
      {
        (!location.pathname.includes('/dashboard/messages') && location.pathname!== '/dashboard/members') && <div className="justify-center fixed bottom-0 right-[20px] items-start px-8 py-2 text-lg text-white bg-violet-800 w-[300px]" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
          Messages ( 05 )
        </div>
      }
    </div>
  )
}

export default App
