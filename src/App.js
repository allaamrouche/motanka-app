import { Routes, Route } from 'react-router-dom';

import MenuManager from './menu/MenuManager/MenuManager';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';

import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
    <MenuManager>
      <TopBar />
    </MenuManager>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
      {/* <Single />
      <Write />
      <Settings />
      <Login />
      <Register /> */}
    </>
  );
}

export default App;
