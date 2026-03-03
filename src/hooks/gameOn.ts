import { useEffect, useState } from "react";

export default function gameOn(){
    const [gameStart, setGameStart] = useState(false)

    useEffect(()=>{

    },[gameStart])

    const startG = () => setGameStart(true)
}