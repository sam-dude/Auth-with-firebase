import { async } from "@firebase/util";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signUp(email, password);
            navigate("/")
        }catch (err){
            setError(err.message)
        }
    }

    
    return (
        <div className="signup">
            <h2>Create an account</h2>
            {error && <p>{error}</p>}
            <form action="">
                <p className="sub-title">Set up your account in less than a minute.</p>

                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name="name" 
                value={name}
                onChange={event => setName(event.target.value)}
                />

                <label htmlFor="email ">Email</label>
                <input 
                type="email" 
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="Password">Password</label>
                <input 
                type="password" 
                name="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                />

                <button className="btn c-btn" onClick={handleSubmit}>Create Account</button>
                <button className="btn">Sign up with Google</button>
            </form>
            <p>Already a user? <Link to='/'>Login</Link></p>
        </div>
    );
}
 
export default Signup;