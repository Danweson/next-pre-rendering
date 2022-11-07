import Menu from "../components/menu";
import User from "../components/user";

function UserList({ users /*users = [] */ }) {
  // console.log(Object.values(users).at(0).map(user => user.email))
  console.log(users);

  return (
    <div>
      <Menu/>
      <h1>List of Users</h1>
      <table className="table table-striped table-sm dt-responsive">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col"> Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <User user={user} key={user.id} />;
          })}
        </tbody>
      </table>
      {/* <table className="table table-striped table-sm dt-responsive">
        <thead>
          <tr>
              <th scope="col">No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
        {
        Object.values(users)[0].map((user, index) => {
            return  (
              <tr key={index}>
                 <td>{user.id}</td>
                 <td>{user.firstName}</td>
                 <td>{user.lastName}</td>
                 <td>{user.email}</td>
                 <td>{user.phone}</td>
              </tr>
            );
          })
          }
          </tbody>
        </table> */}
    </div>
  );
}

export default UserList;

export async function getStaticProps() {
  // const response = await fetch('https://dummyjson.com/users')
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'User-Agent': '*',
        },
    }
  )

  const data = await response.json();
  // console.log(data)

  return {
    props: {
      users: data,
    },
  }
}
