import { Route, Routes, useLocation } from "react-router-dom"
import { Detail, Form, Home, Landing } from "./views/indexViews";
import style from './App.module.css';
import NavBar from './components/Navbar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
const App = () => {
  const location = useLocation();
  return (
    <div className={style.App}>
      <div className={style.Landing}>
        {location.pathname === "/" && <Landing />}
      </div>
      <div className={style.appContainer}>
        <div className={style.searchBar}>
          {location.pathname !== "/" && location.pathname !== "/form"
            && <SearchBar />}
        </div>
        <div className={style.navBar}>
          {location.pathname !== "/" && <NavBar />}
        </div>
        <div className={style.Routes}>
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
