import React from 'react'
import Td from '../Td/Td'
import { Link } from 'react-router-dom'
import './TBody.css'

const TBody = ({ users }) => (

    <tbody>
        {users.map(user => {
            return (
                <tr key={user.id}>
                    <Td className="td_id">
                        {user.id}
                    </Td>
                    <Td>
                        {user.name.split(" ")[0]}
                    </Td>
                    <Td>
                        {user.name.split(" ")[1]}
                    </Td>
                    <Td id="email">
                        {user.email}
                    </Td>
                    <Td>
                         <Link className="link-mais_info" to={{
                            pathname: `${user.id}`,
                            state: {
                                id: user.id
                            }
                        }}>+ informações</Link>
                    </Td>
                </tr>
            )
        })}
    </tbody>
)
export default TBody
