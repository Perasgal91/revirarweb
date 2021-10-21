import "./SecondPageStyles.css";
import "react-app-polyfill/ie11";

import {Component} from "react";
import {withRouter} from "react-router-dom";
 class SecondPageComponent extends Component{

     constructor(props) {
         super(props);
         this.state = {meters: '',
             rooms:'',
             exterior:'',
             bathrooms:'',
         boughtAt:'',
         condition:'',
         liveIn:'',
         valuePrice:'',
         valuePriceReason:'',};

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         const target = event.target;
         const value = target.type === 'checkbox' ? target.checked : target.value;
         const name = target.name;

         this.setState({
             [name]: value
         });
     }

     handleSubmit(event) {
         alert('A name was submitted: ' + this.state.name);
         event.preventDefault();
         this.props.history.push("/third");
     }

     render() {
         return (
                     <form onSubmit={this.handleSubmit}>
                         <label>
                             Metros Cuadrados:
                             <input
                                 type="text"
                                 id="meters"
                                 name="meters"
                                 placeholder=""
                             />
                         </label>

                         <label>
                             Habitaciones:
                             <input
                                 type="text"
                                 id="rooms"
                                 name="rooms"
                                 placeholder=""
                             /></label>

                         <label>
                             Cuantas habitaciones son exteriores:
                             <input
                                 type="text"
                                 id="exterior"
                                 name="exterior"
                                 placeholder=""
                             />
                         </label>

                         <label>
                             Baños:
                             <input
                                 type="text"
                                 id="bathrooms"
                                 name="bathrooms"
                                 placeholder=""
                             /></label>

                         <label>
                             Desde qué año te pertenece:
                             <input
                                 type="text"
                                 id="boughtAt"
                                 name="boughtAt"
                                 placeholder=""
                             /></label>

                         <label>
                             Cuál es el estado de la vivienda:
                             <input
                                 type="text"
                                 id="condition"
                                 name="condition"
                                 placeholder=""
                             /></label>

                         <label>
                             Vives en la vivienda:
                             <input
                                 type="text"
                                 id="liveIn"
                                 name="liveIn"
                                 placeholder=""
                             /></label>

                         <label>
                             Qué valor tiene para usted la vivienda:
                             <input
                                 type="text"
                                 id="valuePrice"
                                 name="valuePrice"
                                 placeholder=""
                             /></label>
                         <label>
                             Porqué piensa que tiene ese valor:
                             <input
                                 type="text"
                                 id="valuePriceReason"
                                 name="valuePriceReason"
                                 placeholder=""
                             /></label>

                         <input type="submit" value="Pedir Oferta"/>
                     </form>
         );
     }
}

export default withRouter(SecondPageComponent);
