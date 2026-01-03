
const Resultdata = ({ userData, setUserdata }) => {

  if (!userData) return null;

  function deleteHandler(idx) {
    const copyUsers = [...userData]
    copyUsers.splice(idx, 1)
    setUserdata(copyUsers)
    localStorage.setItem('userdata', JSON.stringify(copyUsers))

  }

  return (
    <div className="result">
      <h2>Submitted Details</h2>

      {userData.map((item, index) => (
        <div key={index} className="result-card">
          <p><strong>First Name:</strong> {item.firstname}</p>
          <p><strong>Last Name:</strong> {item.lastname}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Password:</strong> {item.password}</p>
          <button onClick={() => {
            deleteHandler(index);
          }} className='btn'>Remove</button>
        </div>
      ))}


    </div>
  )
}

export default Resultdata
