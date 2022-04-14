import { Link } from "react-router-dom";
import './sidebar.css';
function Sidebar(){
    return(
        <div className="sidebar">
            <nav>
                <ul>
                    <li><Link className="link" to='/'><div className="nothing"><span>Столы</span></div></Link></li>
                    <li><Link className="link" to='/info'><div className="nothing"><span>Инфо</span></div></Link></li>
                    <li><Link className="link" to='/page3'><div className="nothing"><span>3</span></div></Link></li>
                    <li><Link className="link" to='/page4'><div className="nothing"><span>4</span></div></Link></li>
                </ul>
            </nav>
        </div>
   )
}

export default Sidebar;