import React, {useState, useEffect} from "react"


export default function List({getItems}) {
    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        setMyItems(getItems)
    }, [getItems])
    
    return (
        <ul>
            { myItems &&
                myItems.map((item) => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}
