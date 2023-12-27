import {useState} from "react"
export function Form ({onAddItems}) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
   
    const handleSubmit = (e) => {
        e.preventDefault(e);
        if (!description) return;

        const newItem = {description, quantity, packed:false, id:Date.now()}
        console.log("new:",newItem)
        onAddItems(newItem)
        setDescription('')
        setQuantity(1)
    }
    
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
               {Array.from({length: 30}, (_, i) => i + 1).map ((num) => (
                <option key={num} value={num}>{num}</option>
               ))}
            </select>
            <input type='text' placeholder='items....'
                value={description} onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}