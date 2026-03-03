import useTypingGame from "@/hooks/typinglogic";
import timerHooks from "@/hooks/timerHooks";
import { SetStateAction } from "react";

type Props = {
    rightWordIn60 : number
    time : number
    setTime : (value: SetStateAction<number>) => void
  
}

export default function wpm({rightWordIn60, time, setTime}: Props){

    const wpmUser = Math.floor(rightWordIn60 / 5)

if(time === 120){
      return(
        <div>
           wpm: {wpmUser}
        </div>
    )

}
  

  

}