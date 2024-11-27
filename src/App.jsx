import './App.css'
import Routes from './Routes'
import AsideNavbar from './components/asideNavbar'
import { useLocation } from 'react-router-dom'
import AsideSettings from './components/asideSettings';
import AsideMessages from './pages/Messages/asideMessages';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const currentLocation = location.pathname === '/dashboard/home' || location.pathname === '/dashboard/groups' || location.pathname.includes('/dashboard/messages') || location.pathname === '/dashboard/members' || location.pathname === '/dashboard/members/requests' || location.pathname === '/dashboard/events' || location.pathname === '/dashboard/course' || location.pathname === '/dashboard/modules'  || location.pathname === '/home' || location.pathname === '/dashboard/details/groups' || location.pathname==='/dashboard/leaderboard' || location.pathname === '/dashboard/events/create' || location.pathname  === '/moderator' || location.pathname.includes('dashboard/course/details') || location.pathname.includes('dashboard') || location.pathname === '/personal-section'  || location.pathname.includes('dashboard/quiz/attempt') || location.pathname.includes('embedding');
  return (
      <div className='customContainer w-full 2xl:max-w-[2000px] mx-auto'>
            <div className={`${currentLocation && 'flex min-h-screen'} bg-[#f2f2f2] md:bg-transparent`}>
      {currentLocation ? <AsideNavbar  navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/> : null}
      <div className='w-full pt-0'>
        {location.pathname !== '/home' ? <Routes navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} /> : null}
      </div>
      {(currentLocation && location.pathname === '/dashboard/home' || location.pathname === '/dashboard/groups') ? <AsideSettings /> : null}
      <div className='absolute'>
      {
        (currentLocation && (location.pathname === '/dashboard/home' || location.pathname === '/dashboard/groups') && <AsideMessages/>)
      }
      </div>
    </div>
      </div>
  )
}

export default App
