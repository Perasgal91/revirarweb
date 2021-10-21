import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Rating from '@mui/material/Rating';
import FormInitialComponent from "../FormInitial/FormInitialComponent";
import {Component} from "react";
class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    render () {
       return ( <div>
            <div className="Body-Image">
                <ul className="fa-ul ul-ml">
                    <li><FontAwesomeIcon icon={faCheck} listItem/>
                        Rápido
                    </li>
                    <li><FontAwesomeIcon icon={faCheck} listItem/>
                        Simple
                    </li>
                    <li><FontAwesomeIcon icon={faCheck} listItem/>
                        Honesto
                    </li>
                    <li><FontAwesomeIcon icon={faCheck} listItem/>
                        Sin riesgo
                    </li>
                    <li><FontAwesomeIcon icon={faCheck} listItem/>
                        Sin comisiones
                    </li>
                </ul>
            </div>
            <div className="App-header-colors">
                <Rating name="read-only" value={4.5} precision={0.5} readOnly/>
                <p className="Stars-Text">72 Reseñas</p>
            </div>
            <FormInitialComponent/>
        </div>);
    }
}

export default HomePage;
