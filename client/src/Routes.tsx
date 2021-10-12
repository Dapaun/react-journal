import {
    Switch,
    Route,
  } from 'react-router-dom';
import DiaryEntryListPage from './pages/DiaryEntryListPage/DiaryEntryListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from "./pages/MainPage/MainPage";

  const Routes = () => {
      return (
        <Switch>
            <Route exact path="/list">
                <DiaryEntryListPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route path="/">
                <MainPage />
            </Route>
        </Switch>
      )
  };

  export default Routes;