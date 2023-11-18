const List = ({ users }) => {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>İsim</th>
          <th>Email</th>
          <th>Yaş</th>
        </tr>
      </thead>
      <tbody data-testid="table-body">
        {users.map((user) => (
          <tr>
            <td>{user.name} </td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
