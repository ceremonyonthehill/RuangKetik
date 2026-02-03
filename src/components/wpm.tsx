import { useState } from "react";
import useTypingGame from "@/hooks/typinglogic";

type Props = {
    rightWord : number
}

export default function wpm({rightWord}: Props){
    const [displayWpm, setDisplayWpm] = useState(0)
    const wpmUser = rightWord / 5
    setDisplayWpm(wpmUser)

    return(
        <div>
            {displayWpm}
        </div>
    )

  

}