export function Stats({items}) {
    if(!items.length) 
    return (
<p className="stats"> <em>Start Adding some Item to your packing List 🚀</em></p>
)
    const numItem = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercent=Math.round(packedItems/numItem*100)
    return (
        <footer className="stats">
            <em> 
            {packedPercent===100 ? "You got everything! Ready to go ✈️":
            
             `💼 You have ${numItem} items on your list, and you already packed ${packedItems} (${packedPercent}%)`}</em>
        </footer>
    )
}