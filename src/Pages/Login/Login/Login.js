import { useEffect, useState } from "react";
import { Button, Card, Form,  Container, ToastContainer } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value}) 
            setErrors({...errors, email: ""})      
        } else {
            setErrors({...errors, email: "Invalid email"})
            setUserInfo({...userInfo, email: ""})
        }

    }

    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        } else {
            setErrors({...errors, password: "Minimum 6 characters!"});
            setUserInfo({...userInfo, password: ""})
        }
        
    }

    const handleLogin = (e) => {
      e.preventDefault();

      console.log(userInfo)

      signInWithEmail(userInfo.email, userInfo.password);
      
  }

  const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || "/";

       useEffect(() => {
           if (user) {
               navigate(from);
           }
       }, [user]);

    useEffect(() => {
        const error = hookError || googleError;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])


  return (
    <div >
        {/* style={{backgroundImage:url('')}} */}
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-3">Log In</h2>
            <hr className="mb-4"/>

            <Form onSubmit={handleLogin}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control  type="email" placeholder="Enter your email" onChange={handleEmailChange} required />
                {errors?.email && <p className="error-message">{errors.email}</p>}
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Enter your password" onChange={handlePasswordChange} required />
              </Form.Group>
              <Button  className="w-100 mt-3" type="submit">
                Log In
              </Button>
            </Form>
            <ToastContainer />
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to='/signup'><span className='text-danger'> Sign Up!</span> </Link>
        </div>
        <button onClick={() => signInWithGoogle()}>Google</button>
      </div>
    </Container>
    
    </div>
  );
};

export default Login;