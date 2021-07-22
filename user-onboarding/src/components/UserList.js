const UserList = function({ users, error }) {
    return (
    <div className="UserList">
      { error }
      <h2>Created users:</h2>
      {users.map(user => 
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      )}
    </div>
    );
}

export default UserList;