import useTypingGame from "@/hooks/typinglogic"

type Props = {
  words: string[];     //ganti nama text yaitu usestate dari api
  playerInput: string;
  wordIndex: number;    //word total adalah kata dari array api sekarang
  errors: boolean[];
}

export default function WordDisplay({ words, playerInput, wordIndex, errors }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, wIdx) => {//bedah words api menjadi per kata
        
       
      

        if (wIdx === wordIndex) {//kalau kata sekarang sama dengan word total, key di sini hitung per kata
          return (
            <span key={wIdx}> 
              {word.split('').map((char, cIdx) => (//kata kita bongkar lagi kita split, key di sini hitung per huruf 
                <span
                  key={cIdx}
                  className={
                    cIdx < playerInput.length //lebih kecil misal cidx = 5 text = hello input = hell
                      ? errors[cIdx] ? 'text-red-500' : 'text-green-500'
                      : 'text-gray-500'
                  }
                >
                  {char}
                </span>
              ))}
            </span>
          );
        }
        
         const wordFinished = wIdx < wordIndex
        return <span key={wIdx} className={
          wordFinished? 'text-gray-700'
                      : 'text-gray-500'
        }>{word}</span>;
      })}
    </div>
  );
}
//map digunakan untuk bekerja di dalam return