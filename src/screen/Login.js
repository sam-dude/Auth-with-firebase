import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await logIn(email, password);
            console.log("Email", email)
            navigate("/home")
        }catch (err){
            setError(err.message)
        }
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
        <div className="Login">
                <h2>Login</h2>
                <p className="sub-title">Login to get started</p>
                {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="email " >Email</label>
                <input type="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                <label htmlFor="Password" >Password</label>
                <input type="password" name="Password" onChange={ (e) => setPassword(e.target.value)}/>
                <button className="btn c-btn" type="submit">Login</button>
                
            </form>
            
            <div>
            <button type="submit" className="btn" onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>
            
            <p>Or don't have an account? <Link to='/signup'>Sign up</Link> <br /><Link to='/resetpassword'>Forgotten password</Link></p>
        </div>
    );
}
 
export default Login;