import "./SecondPageStyles.css";
import "react-app-polyfill/ie11";
import {
    createFormModel,
    Field,
    Formst,
    observer,
    Instance,
    types
} from "formst";

import { send } from 'emailjs-com';
import {Component} from "react";
 class SecondPage extends Component{

     render() {
         return (
                     <form onSubmit={secondPage.handleSubmit}>
                         <label>
                             Metros Cuadrados:
                             <Field
                                 type="text"
                                 id="meters"
                                 name="meters"
                                 placeholder=""
                             />
                         </label>

                         <label>
                             Habitaciones:
                             <Field
                                 type="text"
                                 id="rooms"
                                 name="rooms"
                                 placeholder=""
                             /></label>

                         <label>
                             Cuantas habitaciones son exteriores:
                             <Field
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
