import React, { useState } from 'react'
import Label from '../Label/Label'
import './Ordenar.css'
import Checkbox from '../CheckBox/CheckBox'

const Ordenar = (props) => {
    const [itens, setItens] = useState(props.lista.map(item => (
        { ...item, isChecked: false })
    ))

    const handleCheckChieldElement = (event) => {
        let novosItens = itens
        novosItens.map(item => {
           return item.value === event.target.value ? item.isChecked = event.target.checked : ''
        }
        )
        setItens(novosItens)
        props.filtrar(novosItens.filter(item => item.isChecked === true).map(it => it.value))        
    }

    return (
        <div className="card"> 
        <div className="card-ordenar">   
            <Label>Ordenar:
            </Label>
            {props.lista.map((item, i) => {
                return (

                    <p key={i}>
                        <Checkbox id={i} {...item} handleCheckChieldElement={handleCheckChieldElement} />
                        {item.name}
                    </p>

                )
            })}
            </div>
        </div>

    )

}

export default Ordenar;