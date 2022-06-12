import { useState } from 'react';
import {userRandom} from './getUsuario';
import { Card } from './components/Card';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const newUser = () => {
    const oldUsers = [...users];
    userRandom().then((usuarios) => {
      setUsers([...oldUsers, ...usuarios]);
    });
  }

  if(users.length === 0){
    userRandom().then((usuarios)=>{
      setUsers(usuarios);
    });
  }else{

    return (
      <>
        <header>
          <div className='title'>
            <h1>Profiles App</h1>
            <h3>Freom HTML to Api Rest</h3>
          </div>
        </header>
        <main>
          <Card users={users} newUser={newUser}/>
        </main>
      </>
    )


  }
}

export default App;
