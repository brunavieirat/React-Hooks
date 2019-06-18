import React from 'react'
import Button from '../Button/Button'
import './TFoot.css'

const TFoot = (props) => {
    let rows = []
    for (let i = 1; i <= props.quantidade; i++) {
        let end = props.paginacao * i
        let start = end - props.paginacao

        rows.push(<td key={i}>
            <Button 
            classe="button-paginacao"
            click={() => {
                props.setStart(start)
                props.setEnd(end)
            }}>{i}</Button>
            </td>
        )
    }
    return (
        <tfoot className="tFoot">
            <tr className="tFoot">
                {rows}
            </tr>
        </tfoot>

    )
}
export default TFoot;