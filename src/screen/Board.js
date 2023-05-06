import { Link  } from "react-router-dom";
import BoardImg from '../Assets/board.jpg'

const Board = () => {
    return (
        <div className="Board">
            <div className="top">
                <img src={BoardImg} alt="on-board" />
            </div>
            <div className="bottom">
                <h2 style={{textAlign: 'center'}}>Discover your <br />Dream job Here</h2>
                <p style={{textAlign: 'center'}}>Explore all the most exiting jobs roles <br />based on your interest and study major</p>
                <div className="ct">
                <div className="cta">
                    <Link className="b-btn" to='/signup'>Register</Link>
                    <Link className="b-btn" to='/login'>Sign in</Link>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default Board;