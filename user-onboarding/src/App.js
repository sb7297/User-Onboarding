import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [formSubmission, setFormSubmission] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    if (formSubmission) {
      axios.post('https://reqres.in/api/users', formSubmission)
        .then(res => {
          setUsers(oldUsers => [ ...oldUsers, res.data ]);
        })
        .catch(err => {
          setError(JSON.stringify(err.toJSON()));
        });
    }
  }, [formSubmission]);

  return (
    <div className="App">
      <Form sendData={setFormSubmission} />
      <UserList users={users} error={error} />
    </div>
  );
}

export default App;
