import {
    Switch,
    Route,
  } from 'react-router-dom';
import DiaryEntryList from './pages/DiaryEntryList/DiaryEntryList';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from "./pages/MainPage/MainPage";

  const Routes = () => {
      return (
        <Switch>
            <Route exact path="/list">
                <DiaryEntryList />
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