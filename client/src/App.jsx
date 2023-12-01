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
      {location.pathname !== '/' && <div className={style.appContainer}>
        <div className={style.searchBar}>
          {location.pathname !== "/" && location.pathname !== "/form"
            && <SearchBar />}
        </div>
        <div className={style.navBar}>
          {location.pathname !== "/" && <NavBar />}
        </div>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route exac path="/home" element={<Home />} />
        </Routes>
      </div>
      }
    </div>
  )
}

export default App;
