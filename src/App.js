
import { useState } from "react"
import {Logo} from "./Logo"
import {Form} from "./Form"
import {PackingList} from "./PackingList"
import { Stats } from "./Stats"

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "shoe", quantity: 1, packed: true },
// ];
export default function App ()  {
  const [items, setItems] = useState([])
  function handleAddItems (item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItems (id) {
    setItems((items)=>items.filter((item) => item.id!==id))
  }
  function handleToggleItem (id) {
    setItems((items) => items.map((item) => item.id===id ? {...item, packed:!item.packed} :item) )
  }
  function handleClearList () {
    const confirm = window.confirm("Are you sure your want to clear the list?");
    if(confirm)
    setItems([])
  }
console.log("app items:",items)
  return (<div className="app">
  
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items}/>
  </div>
  )
}