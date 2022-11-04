
function User({user}){
    return (
        <>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
           </tr>
        </>
    )
}

export default User