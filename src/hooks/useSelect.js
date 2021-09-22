import React, {useState} from 'react'

const useSelect = (stateInicial, opciones) => {
// STATE DEL CUSTOM HOOKS
const [state, actualizarState] = useState(stateInicial);


    const SelectNoticias = () => (
        <select 
        className='browser-default'
        value={state}
        onChange={e => actualizarState(e.target.value)}
        >
            <option value="">-- Seleccione --</option>
            {opciones.map(opcion =>(
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );
    return [state, SelectNoticias];
}
 
export default useSelect;