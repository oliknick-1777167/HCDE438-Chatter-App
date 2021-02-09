import {useState} from 'react'
import { AiOutlineUserAdd } from "react-icons/ai"; 

function NamePicker(){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState('Pick a Username:')
    
    if (showInput) {
        return <div className="name-picker">
            
            <input value={username}
                onChange={e=> setUsername(e.target.value)} 
            />
            <button onClick={()=>setShowInput(false)}>
                OK
            </button>

        </div>
    }
    return <div className="edit-username">

        <div className="username">{username}</div>
        <button onClick={()=>setShowInput(true)} >
            <AiOutlineUserAdd></AiOutlineUserAdd>
        </button>
    </div>

}

export default NamePicker