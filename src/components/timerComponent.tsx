import { SetStateAction, useEffect } from "react"

type Props = {
    typeStart : string
    start : () => void
    time: number
    setTime: (value: SetStateAction<number>) => void
}
export default function timerComponent({typeStart, start, time,setTime}: Props){
    useEffect(()=>{
          if(typeStart.length === 1){
        start()
    }  if(typeStart.length === 1 && time === 120){
        setTime(0)
    }
    }, [typeStart, start])

     const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  
  }
  

    return (
        <div>
         {formatTime(time)}
        </div>
    )
}