'use client'
import { useState, useEffect, useRef } from "react"

export default function useTypingGame(){
    const[playerInput, setPlayerInput] = useState('')
    const[text, setText] = useState('')
    const[wordtotal, setwordtotal] = useState(0)
    const [errors, setErrors] = useState<boolean[]>([])
    
    const fetchapi = () => {
      fetch('https://random-word-api.herokuapp.com/word?number=5')
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
    
    const rightWord = useRef(0)
    const getplayerinput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setPlayerInput(value)
    
      const newErrors: boolean[] = []
        for (let i = 0; i < value.length; i++) {
          newErrors[i] = value[i] !== text[wordtotal]?.[i]
        }
        setErrors(newErrors)
    
      if(value.length === text[wordtotal]?.length ){
        if(value === text[wordtotal]){
rightWord.current ++
        }
      if(wordtotal === text.length -1){
        fetchapi()
    
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
        rightWord
      

    }
}