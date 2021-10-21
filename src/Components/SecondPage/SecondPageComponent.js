import "./SecondPageStyles.css";
import "react-app-polyfill/ie11";

import {Component} from "react";
import {withRouter} from "react-router-dom";
import {send} from "emailjs-com";
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
         valuePriceReason:''};

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
         event.preventDefault();
         const data = {
             meters: this.state.meters,
             rooms: this.state.rooms,
             exterior: this.state.exterior,
             bathrooms: this.state.bathrooms,
             boughtAt: this.state.boughtAt,
             condition: this.state.condition,
             liveIn: this.state.liveIn,
             valuePrice: this.state.valuePrice,
             valuePriceReason: this.state.valuePriceReason,
         }

         send('service_eboaerg', 'template_nqjkcjq', data, 'user_CFcGpnhJSDxRrmxNHmhVN')
             .then((result) => {
                 this.props.history.push("/third");
             }, (error) => {
                 alert("Inténtelo de nuevo, ha habido un error");
             });
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
                                 placeholder=""onChange={this.handleChange}
                             />
                         </label>

                         <label>
                             Habitaciones:
                             <input
                                 type="text"
                                 id="rooms"
                                 name="rooms"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             Cuantas habitaciones son exteriores:
                             <input
                                 type="text"
                                 id="exterior"
                                 name="exterior"
                                 placeholder=""onChange={this.handleChange}
                             />
                         </label>

                         <label>
                             Baños:
                             <input
                                 type="text"
                                 id="bathrooms"
                                 name="bathrooms"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             Desde qué año te pertenece:
                             <input
                                 type="text"
                                 id="boughtAt"
                                 name="boughtAt"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             Cuál es el estado de la vivienda:
                             <input
                                 type="text"
                                 id="condition"
                                 name="condition"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             Vives en la vivienda:
                             <input
                                 type="text"
                                 id="liveIn"
                                 name="liveIn"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             Qué valor tiene para usted la vivienda:
                             <input
                                 type="text"
                                 id="valuePrice"
                                 name="valuePrice"
                                 placeholder=""onChange={this.handleChange}
                             /></label>
                         <label>
                             Porqué piensa que tiene ese valor:
                             <input
                                 type="text"
                                 id="valuePriceReason"
                                 name="valuePriceReason"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <input type="submit" value="Enviar Datos"/>
                     </form>
         );
     }
}

export default withRouter(SecondPageComponent);
