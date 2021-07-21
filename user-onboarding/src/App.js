import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [formSubmission, setFormSubmission] = useState(null);
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    if (formSubmission) {
      axios.post('https://reqres.in/api/users', formSubmission)
        .then(res => {
          setUsers([ ...users, res.data ]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [formSubmission]);

  return (
    <div className="App">
      <Form sendData={setFormSubmission} />
      <UserList users={users} />
    </div>
  );
}

export default App;
