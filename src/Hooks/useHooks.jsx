import { useEffect, useState } from "react";

const useMenu = () =>{

    const [menu, setmenu] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() =>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setloading(false)
            setmenu(data)
        })
    }, [])
return [menu,loading]

}



export default useMenu