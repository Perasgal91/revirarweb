import "./ThirdPageStyles.css";
import "react-app-polyfill/ie11";

import {Component} from "react";
import {withRouter} from "react-router-dom";
import {send} from "emailjs-com";
 class ThirdPageComponent extends Component{

     constructor(props) {
         super(props);
         this.state = {priorRenovation: '',
             renovationSummary:'',
             callTime:'',
             whenSell:'',
         whySell:'',
         minimumPrice:''};

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
             priorRenovation: this.state.priorRenovation,
             renovationSummary: this.state.renovationSummary,
             callTime: this.state.callTime,
             whenSell: this.state.whenSell,
             whySell: this.state.whySell,
             minimumPrice: this.state.minimumPrice
         }
         send('service_eboaerg', 'template_04sn06s', data, 'user_CFcGpnhJSDxRrmxNHmhVN')
             .then((result) => {
                 this.props.history.push("/");
             }, (error) => {
                 alert("Inténtelo de nuevo, ha habido un error");
             });
     }

     render() {
         return (
                     <form onSubmit={this.handleSubmit}>
                         <label>
                             Hubo alguna reforma anterior?:
                             <input
                                 type="text"
                                 id="priorRenovation"
                                 name="priorRenovation"
                                 placeholder=""onChange={this.handleChange}
                             />
                         </label>

                         <label>
                             Qué reformas necesita a simple vista:
                             <input
                                 type="text"
                                 id="renovationSummary"
                                 name="renovationSummary"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             Cuánto es lo mínimo que aceptaría por la vivienda?:
                             <input
                                 type="text"
                                 id="minimumPrice"
                                 name="minimumPrice"
                                 placeholder=""onChange={this.handleChange}
                             />
                         </label>

                         <label>
                             Por qué vender en este momento?:
                             <input
                                 type="text"
                                 id="whySell"
                                 name="whySell"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             En cuanto tiempo le gustaría vender su vivienda?:
                             <input
                                 type="text"
                                 id="whenSell"
                                 name="whenSell"
                                 placeholder=""onChange={this.handleChange}
                             /></label>

                         <label>
                             Cuál es la mejor franja horaria para llamarle:
                             <input
                                 type="text"
                                 id="callTime"
                                 name="callTime"
                                 placeholder=""onChange={this.handleChange}
                             /></label>


                         <input type="submit" value="Finalizar Proceso"/>
                     </form>
         );
     }
}

export default withRouter(ThirdPageComponent);
