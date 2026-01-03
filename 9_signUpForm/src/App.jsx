import { useState } from 'react';
import Resultdata from './components/Resultdata';

const App = () => {

  // usestate  hai data  set karne k liye signup card main ................//
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

// localStorage se item lene k liye .............//
  const localData = JSON.parse(localStorage.getItem("userData")) || [];

  // yaha par local data phele se hi set rahega .........................//
  const [userData, setUserData] = useState(localData);

  // saare k saare subit ya phir joinus btn ko handle karta hain ...............//
  const submitHandler = (e) => {
  e.preventDefault();

  const newUser = {
    firstname,
    lastname,
    email,
    password,
  };

  const updatedUsers = [...userData, newUser];

  setUserData(updatedUsers);
  localStorage.setItem("userData", JSON.stringify(updatedUsers));


  setFirstname("");
  setLastname("");
  setEmail("");
  setPassword("");
};


  return (
    <div>
      <main>

        {/* signup form */}
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="signup-form">
          <h1>Sign Up</h1>

          <input type="text" placeholder="First Name"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value)
            }} />
          <input type="text" placeholder="Last Name"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value)
            }} />
          <input type="email" placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />
          <input type="password" placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} />

          <label className="terms">
            <input type="checkbox" required />
            Accept terms & conditions
          </label>

          <button type="submit">Join Us</button>
        </form>


{/* props drilling */}
        <div className="result-container">
          <Resultdata userData={userData}
            setUserdata={setUserData} />
        </div>


      </main>
    </div>
  )
}

export default App
