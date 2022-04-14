import { Link } from "react-router-dom";
import './style.css';
function Table(props){
    return(
        <div className="TableOnMain">
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img className="productimage" src={props.tableprop.img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>{props.tableprop.name}</h3>
                    <div className="buybutton">
                        <Link className="link" to={`/products/table/${props.tableprop.id}`}><span className="textt">Подробнее</span></Link>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Table;