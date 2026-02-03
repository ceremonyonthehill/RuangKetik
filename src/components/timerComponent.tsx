import { useEffect } from "react"

type Props = {
    typeStart : string
    start : () => void
    time: number
}
export default function timerComponent({typeStart, start, time}: Props){
    useEffect(()=>{
          if(typeStart.length === 1){
        start()
    }


    }, [typeStart, start])
  

    return (
        <div>
         {time}
        </div>
    )
}