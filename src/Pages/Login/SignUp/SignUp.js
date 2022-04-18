import { useEffect, useState } from "react";
import { Button, Card, Form,  Container } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import googlelogo from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, loading3, githubError] = useSignInWithGithub(auth);
    

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };

    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleLogin = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      
  }


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    
    if (user || googleUser || githubUser) {
        navigate(from , {replace: true});
    }
    

    useEffect(() => {
        const error = hookError || googleError || githubError;
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
    }, [hookError, googleError, githubError])


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
            <h2 className="text-center mb-3">SignUp</h2>
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
              <Form.Group id="cofirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control  type="password" placeholder="confirm your password" onChange={handleConfirmPasswordChange} required />
              </Form.Group>
              <Button  className="w-100 mt-3" type="submit">
                Log In
              </Button>
            </Form>
            <ToastContainer />
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to='/login'><span className='btn btn-link text-primary pe-auto text-decoration-none'> Login!</span> </Link>
        </div>
      
        <div className="d-flex align-items-center">
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
            <p className="mt-2 px-2">Or</p>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
        </div>
        <div>
            <button className="btn btn-primary w-75 d-block mx-auto" onClick={() => signInWithGoogle()}>
              <img style={{width:'30px'}} src={googlelogo} alt="" />
              <span className="px-4">Google</span>
            </button>
        </div>
        <div className='mt-2'>
            <button className="btn btn-primary w-75 d-block mx-auto" onClick={() => signInWithGithub()}>
              <img style={{width:'30px'}} src={github} alt="" />
              <span className="px-4">Github</span>
            </button>
        </div>
      </div>
    </Container>
    
    </div>
  );
};

export default SignUp;