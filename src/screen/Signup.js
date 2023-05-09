import { async } from "@firebase/util";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Modal, Button } from "react-bootstrap";
import VerifiedImg from '../Assets/animated-icon/verified.gif';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal 
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Body style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <img src={VerifiedImg} alt="" style={{width: '200px'}}/> </Modal.Body>
    </Modal>
    );
  }

const Signup = () => {

    const [showModal, setShowModal] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState("");
    const { signUp, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const [isValidPassword, setIsValidPassword] = useState(false);
    const handleClose = () => setShowModal(false);

    const validatePassword =  (password) => {
        if (password.length > 8){
            return true
        }
        else {
            return false
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signUp(email, password);
            setShowModal(true);
            setTimeout(() => {
                navigate("/")
            }, 4000);
        }catch (err){
            setError(err.message)
        };
    }

    const handleGoogleSignIn = async (e) =>{
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home");
        }catch(err){
            setError(err.message)
        }
    }

    
    return (
        <div className="signup">

            {/* Modals */}
            <MyVerticallyCenteredModal
                show={showModal} onHide={handleClose}
            />


            <h2>Create an account</h2>
            {error && <p>{error}</p>}
            <form action="">
                <p className="sub-title">Set up your account in less than a minute.</p>

                <input 
                type="text" 
                name="name" 
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Name "
                />

                <input 
                type="email" 
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
                />

                <input 
                type="password" 
                name="Password"
                value={password}
                onChange={event => {setPassword(event.target.value); setIsValidPassword(validatePassword(event.target.value)) }}
                placeholder="Password"
                />

                <button className="b-btn c-btn" onClick={handleSubmit} disabled={!isValidPassword}>Create Account</button>
                <div className="hr">Or</div>
                <button type="submit" className="b-btn g-btn" onClick={handleGoogleSignIn} >Continue with Google</button>
            </form>
            <p>Already a user? <Link to='/login'>Login</Link></p>
        </div>
    );
}
 
export default Signup;