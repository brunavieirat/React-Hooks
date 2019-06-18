import axios from 'axios'

const configuracoes = {
    baseURL: 'https://json-server444.herokuapp.com/users'
}

const protocolo = axios.create(configuracoes)

export default protocolo