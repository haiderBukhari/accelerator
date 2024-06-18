import './App.css'
import Routes from  './Routes'
import AsideNavbar from './components/asideNavbar'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const currentLocation = location.pathname === '/home';
  return (
    <div className={`${currentLocation && 'flex min-h-screen'}`}>
      {currentLocation ? <AsideNavbar/> : null}
      <Routes/>
    </div>
  )
}

export default App
