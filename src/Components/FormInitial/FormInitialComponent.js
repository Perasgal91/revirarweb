import {Component} from "react";
import {withRouter} from "react-router-dom";
import {send} from 'emailjs-com';

class FormInitialComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: ''
        };

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
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address
        }

        send('service_eboaerg', 'template_ttlyef4', data, 'user_CFcGpnhJSDxRrmxNHmhVN')
            .then((result) => {
                this.props.history.push("/second");
            }, (error) => {
                alert("Inténtelo de nuevo, ha habido un error");
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Dirección" onChange={this.handleChange}
                />

                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                />


                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Teléfono"
                    onChange={this.handleChange}
                />

                <input type="submit" value="Pedir Oferta"/>
            </form>
        );
    }
}

export default withRouter(FormInitialComponent);
