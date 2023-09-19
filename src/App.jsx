// import logo from './logo.svg';
import { NavLink, Route, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
const Profile = () => {
  return <h1>Это страница с профилем</h1>
}

const Messages = () => {
  return <h1>Страница сообщений</h1>
}

const Settings = () => {
  return <h1>Страница с настройками</h1>
}

import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink to="profile" className="nav-link text-center">Профиль</NavLink>
          </div>

          <div className="nav flex-column nav-pills">
            <NavLink to="messages" className="nav-link text-center">Сообщения</NavLink>
          </div>

          <div className="nav flex-column nav-pills">
            <NavLink to="settings" className="nav-link text-center">Настройки</NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
