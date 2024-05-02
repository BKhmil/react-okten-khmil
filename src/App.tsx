import React, {FC} from 'react';
import './App.css';
import Users from "./components/Users";
import {getAllUsers} from "./services/user.service";

const App: FC = () => {
  return (
    <>
      <Users getData={getAllUsers}/>
    </>
  );
}

export default App;
