import { Route, Routes } from "react-router-dom";
import "./App.css";
import ROUTER from "./router/router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ErrorPage from "./pages/ErrorPage";
import OurClientsPage from "./pages/OurClientsPage";
import SingleNewsPage from "./pages/SingleNewsPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={ROUTER.ABOUT_PAGE_ROUTE} element={<AboutPage />} />
        <Route path={ROUTER.NEWS_PAGE_ROUTE} element={<NewsPage />} />
        <Route
          path={ROUTER.OUR_CLIENTS_PAGE_ROUTE}
          element={<OurClientsPage />}
        />
        <Route
          path={ROUTER.SINGLE_NEWS_PAGE_ROUTE}
          element={<SingleNewsPage />}
        />
        <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
        <Route path={ROUTER.SIGN_IN_PAGE_ROUTE} element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
