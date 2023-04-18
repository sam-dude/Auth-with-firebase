import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
    const {user, logOut} = useUserAuth();
    console.log(user);
    const handlelogOut = async () => {
        try{
            await logOut();
        }catch(err) {
            console.log(err.message);
        }
    }
    return ( 
        <div className="home">
            <div>Hello welcome <br/> {user && user.email}</div>
            <h2>Home</h2>
            <button onClick={ handlelogOut }>Logout</button>
        </div>
     );
}
 
export default Home;