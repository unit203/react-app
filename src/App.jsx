// import logo from './logo.svg';
import { NavLink, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import { Messages } from "./components/Messages";
import { Friends } from "./components/Friends";

import './App.css';

function App(props) {
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
          <div className="nav flex-column nav-pills">
            <NavLink to="friends" className="nav-link text-center">Друзья</NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>

            <Route path="/" element={<h3>Ваш личный кабинет. Воспользуйтесь меню слева</h3>}/>
            <Route path="/profile/*" element={<Profile function={props.functions.key_getUser} />}></Route>
            <Route path="/friends" element={<Friends function={props.functions.key_getUsers} />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
