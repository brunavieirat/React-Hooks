import React, { Component } from 'react'
import Label from '../../components/Label/Label'
import Button from '../../components/Button/Button'
import { withRouter } from "react-router-dom";
import * as apiUsers from '../../apis/users'
import './UserInfo.css'

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carregando: true,
            usuario: {}
        }
        this.load()
    }

    load = () => {
        apiUsers.getIdUser(this.props.id)
            .then(response => {
                this.setState({ usuario: response.data })
                this.setState({ carregando: false })
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.erro)
                }
            })
    }

    render() {
        return (
            <div className="container">
                <section className="card">
                    {!this.state.carregando ?
                        <>

                            < fieldset >
                                <legend className="legend"> Contato: </legend>
                                <Label> Nome: <p> {this.state.usuario.name} </p>
                                </Label>
                                <Label> User: <p> {this.state.usuario.username} </p>
                                </Label>
                                <Label> E-mail: <p> {this.state.usuario.email} </p>
                                </Label>
                                <Label> Telefone: <p> {this.state.usuario.phone} </p>
                                </Label>
                                <Label> Site: <p> {this.state.usuario.website} </p>
                                </Label>

                                <Label> Empresa: <p> {this.state.usuario.company.name} </p>
                                </Label>
                            </fieldset>

                            <fieldset>
                                <legend className="legend"> Endereço: </legend>

                                <Label> Rua/Av: <p> {this.state.usuario.address.street} </p>
                                </Label>
                                <Label> Número: <p> {this.state.usuario.address.suite} </p>
                                </Label>
                                <Label> Cidade: <p> {this.state.usuario.address.city} </p>
                                </Label>
                                <Label> Cep: <p> {this.state.usuario.address.zipcode} </p>
                                </Label>
                            </fieldset>

                            <div className="rigth">
                                <Button
                                    classe="button-paginacao"
                                    click={() => {
                                        this.props.history.push('/')
                                    }}>Voltar</Button>
                            </div>
                        </>

                        : <p> carregando... </p>}
                </section>
            </div>
        )
    }
}

export default withRouter(UserInfo)
