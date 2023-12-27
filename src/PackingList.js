import { useState } from "react";
import { Item } from "./Item";
export function PackingList ({items, onDeleteItems, onToggleItem, onClearList}) {
    const [shortItems, setShortItems] = useState('input');
    let ShortedItems;
    if(shortItems==="input") ShortedItems=items;
    if(shortItems==="description") ShortedItems=items.slice().sort((a,b)=> a.description.localeCompare(b.description))
    if(shortItems==='packed') ShortedItems=items.slice().sort((a,b)=> Number(a.packed)-Number(b.packed))

    return(
        <div className="list">
         <ul>
         {ShortedItems && ShortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem}/>
         ))
         }
         
        </ul>
        <div className="actions">
            <select value={shortItems} onChange={(e) => setShortItems(e.target.value)}>
                <option value={"input"}>Sort by input</option>
                <option value={"description"}>Sort by description</option>
                <option value={"packed"}>Sort by packedItems</option>
            </select>
            <button onClick={onClearList}>clear list</button>
        </div>
        </div>
        )
    
}