import {
    Switch,
    Route,
  } from 'react-router-dom';
import DiaryEntryList from './pages/DiaryEntryList/DiaryEntryList';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from "./pages/MainPage/MainPage";
import SignUpPage from './pages/SignUpPage/SignUpPage';

  const Routes = () => {
      return (
        <Switch>
            <Route exact path="/list">
                <DiaryEntryList />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/sign-up">
                <SignUpPage />
            </Route>
            <Route exact path="/">
                <MainPage />
            </Route>
        </Switch>
      )
  };

  export default Routes;