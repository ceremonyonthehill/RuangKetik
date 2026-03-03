import { useState, useEffect } from "react";



export default function timerHooks(limit = 120){
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0)

useEffect(() => {
    if(!isActive)return

   const id = setInterval(() => {
setTime(t => {
       if (t + 1 >= limit) {
          setIsActive(false)   
          return limit        
        }
        return t + 1
      })
    }, 1000)

    return () => clearInterval(id)
  }, [isActive, limit])
   


  const start = () => setIsActive(true)

  return { start, time, setTime }

}

//kalau mau buat timer, waktu berjalan perlu di display berarti perlu state di mana function akan terus update
//why we need to import isActive, because is not for start isn it
//how do we casually pass parameter for funtion
