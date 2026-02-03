'use client'
import useTypingGame from "@/hooks/typinglogic";
import TypingInput from "@/components/typingInput";
import WordDisplay from "@/components/wordDisplay";
import TimerComponent from "@/components/timerComponent";
import timerHooks from "@/hooks/timerHooks";

export default function Home() {
   const {
    currentWord,
    playerInput,
    errors,
    getplayerinput

  } = useTypingGame()

  const {
    start,
    time
  } = timerHooks()




  return (

         <div className='flex flex-col justify-center items-center'>
          <div className=' bg-blue-400 mt-50'>

            <TimerComponent
            typeStart = {playerInput}
            start = {start}
            time = {time}

            />
          

            <WordDisplay 
            currentWord={currentWord}
  playerInput={playerInput}
  errors={errors}
            />

            < TypingInput
            value = {playerInput}
            onChange={getplayerinput}

            
            />
          </div>
    </div>
  );
}

/*
Membuat typing test
Pertama bagaiaman cara mendisplay api yg telah di fetch ke input

Setelah kita fetch kita menggunakan komponen input yg memiliki value, dan onchange
Meski value duluan dari onchange namun urutan eksekusinya onchange terlebih dahulu di mana menangkap player input dan diolah dengan segala logic. Baru di render dengan value, karena kita menggunakan react value di sini mengangung state yg bertugas merender setiap input player ke homepage

CORE
Bagaimana mendapakatkan player input?
kita membutuhkan pada suatu input, value dan onchange
Cara mengambil input player adalah menggunakan onchange, dengan logic segala macam. Kita merendernya dengan react menggunakan value, yaitu state yg juga berada di dalem function on change
Basic dari state adalah ambil dan render
Kenapa di function change, karena kita ambil dari e.target pass ke usestate, nah buat display di return. Harus menggunakan usestate tidak bisa variabel atau hal lainnya karena ini react
Juga usestate menjadi fleksibel untuk mereset semua input player jika sudah selesai dengan mengkosongkan value usestate yg lalu diupdate di setPlayerinput dan diupdat di playerInput

*/
