import useTypingGame from "@/hooks/typinglogic"

type Props = {
    currentWord: string,
    playerInput: string,
    errors: boolean[]

}

export default function wordDisplay({
    currentWord,
    playerInput,
    errors
}: Props){
  
    return(
        <div>
               
                <p className='mb-4'>
                   {currentWord.split('').map((char, i) => (
            <span
              key={i}
              className={
                i < playerInput.length
                  ? errors[i] ? 'text-red-500' : 'text-green-500'
                  : 'text-gray-500'
              }
            >
              {char}
            </span>
          ))}
          </p>
        </div>
    )
}