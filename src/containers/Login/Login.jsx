import React, { useState } from "react";
import Logo from '../../images/logo.jpg'
import {Form} from 'react-bootstrap'
import { useHistory } from "react-router";

 function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading]=useState(false)
  const history=useHistory()
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
     setTimeout(()=>{
      if(user==='foo' && password==='bar'){
        localStorage.setItem('token','12345')
        history.push('/home')
      }else{
        alert('Invalid UserName or Password')
      }
      setLoading(false);
     },500)

  }
  function validateForm() {
    return user.length > 0 && password.length > 0;
  }
  return (
    <div className="m-auto" style={{maxWidth:'300px'}}>
        <img className='w-100 mb-3' src={Logo} alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="user">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
         <div>
        <button className='btn btn-primary btn-md my-2 w-100' type="submit" disabled={!validateForm() && loading}>
          { !loading ?'Login':<>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </>
          }
        </button>
        </div>
        
      </Form>
    </div>
  );
}

export default Login