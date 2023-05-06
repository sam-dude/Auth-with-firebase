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
                <h2>Hello Again!</h2>
                <p className="sub-title">Welcome back you've <br />been missed</p>
                {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                
                
                <input type="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)} placeholder="Enter email"/>
                
                <input type="password" name="Password" onChange={ (e) => setPassword(e.target.value)} placeholder="Password"/>
                <Link to='/resetpassword' style={{textAlign: 'end', textDecoration: 'none', color: '#000', padding: '14px 0'}}>Recovery Password</Link>
                <button className="b-btn c-btn" type="submit">Sign In</button>
                
            </form>
            
            <div>
            <button type="submit" className="b-btn btn" onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>
            
            <p>Not a member?<Link to='/signup'>Register now</Link></p>
        </div>
    );
}
 
export default Login;