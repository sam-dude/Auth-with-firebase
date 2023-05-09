import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ResetPassword = () => {
    const { resetPassword } = useUserAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await resetPassword(email);
            navigate("/login");
        }catch(err){
            setError(err.message)
        }
    }
    return (
        <div className="reset">
            <h2>Reset Your Password</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Input your Email</label>
                <input 
                type="email" 
                name="email" 
                id="email"  
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
                <button type="submit" className="c-btn">Get Reset Link</button>
                <hr />
                <Link to='/login'>Login</Link>
            </form>
        </div>
    );
}
 
export default ResetPassword;