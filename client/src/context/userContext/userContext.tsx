import React from "react";

interface UserContextProps {
    isAuthenticated: boolean;
    user: any;
    changeAuthenticationStatus: (user?: any) => void;
  }
export const UserContext = React.createContext<UserContextProps>(undefined as any);

const UserContextProvider = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState(null);
    React.useEffect(()=> {
      if(localStorage.getItem('user')) {
        setUser(localStorage.getItem('user') as any);
        setIsAuthenticated(true);
      }
    }, []);

    const changeAuthenticationStatus = (user ?: any) => {
        isAuthenticated ? setUser(null) : setUser(user);
        setIsAuthenticated(!isAuthenticated);
        user && localStorage.setItem('user', user);
      };
    
    return (
        <UserContext.Provider value={{isAuthenticated, user, changeAuthenticationStatus}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;