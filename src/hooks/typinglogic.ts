'use client'
import { useState, useEffect, useRef } from "react"
import timerHooks from "./timerHooks"

type Props = {
  time : number
}

export default function useTypingGame({time}: Props){
    const[playerInput, setPlayerInput] = useState('')
    const[text, setText] = useState<string[]>([])
    const[wordtotal, setwordtotal] = useState(0)
    const [errors, setErrors] = useState<boolean[]>([])

    const rightChar = useRef(0)
  
    
    
    const fetchapi = () => {
      fetch('https://random-word-api.herokuapp.com/word?number=9')
        .then(response => response.json())
        .then(data => {
          setwordtotal(0)
          setErrors([])
          setPlayerInput('')
    
          setText(data)} )
    
    }
          
    useEffect(() => {
        fetchapi()
    }, []);
    

    const getplayerinput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setPlayerInput(value)//dapetin input dari user
    
      const newErrors: boolean[] = []//errors untuk error word
        for (let i = 0; i < value.length; i++) {//loop ini selama value kita kalau ada error, di mana kondisinya value ngga sama dengan text <- data api [wordtotal] perkata
          newErrors[i] = value[i] !== text[wordtotal]?.[i]
        }
        setErrors(newErrors)//update seterrors
    
      if(value.length === text[wordtotal]?.length ){//kalau panjang kata sama lanjut dicek kalau value litterally sama kala kata itu
        if(value === text[wordtotal]){
if(time < 60){
 rightChar.current += value.length//intinya cara menghitung kata yang benar adalah dengan menambahkan panjang kata dari kata yg benar dibawah satu menit


}

        }
      if(wordtotal === text.length -1){
        fetchapi()//-1 adalah untuk ujung, jadi kalau wordtotal 5 === 5
    
      }else{
        setwordtotal(prev => prev + 1)
        setPlayerInput('')
      }
    }
    }
    
    const currentWord = text[wordtotal] || ''

    return {
        currentWord,
        playerInput,
        errors,
        getplayerinput,
        rightChar,
        words: text,       //ganti nama text yaitu usestate dari api
    wordIndex: wordtotal,  //word total adalah kata dari array api sekarang
        
      
      

    }
}
//dapetin input user + kalau ada kata yg salah kita kasih warna merah, kalau ada kata yg benar kita kasih warna hijau
//kita bikin input dengan fitur onchange
//untuk akses ke tiap katanya kita perlu masuk ke usestate update api, terus perkatanya, terus loop perhurufnya
//baru kita kasih kondisi di situ kalau value yg kita tulis sama atau tidak
//kalau sama maka warna hijau dengan cara ygdiketiksekarang === api[teks].?[i]
//kalau ngga sama, kondisinya yaitu ygdiketiksekarang !== api[teks].?[i]


//untuk mendapatkan fitur reset
//aku perlu mendapat patokan kapan game satu selesai
//terus mula game ke dua
//if wpm >= 0 && value.length > 0
//time = 0
//wpm =

//harus nambahin kondisi di masing-masing komponen
//atau kode ulang untuk dijadiin satu sistem di dalam true or false untuk start game