export function Item ({item, onDeleteItems, onToggleItem}) {
    console.log("items:",item)
    return(
        <div> <li style={item.packed?{textDecoration:"line-through"}:{}}>
        <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
    <span>{item.quantity} {item.description}</span>
    <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
    </div>
    )
}