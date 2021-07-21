const UserList = function({ users }) {
    return (
    <div className="UserList">
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