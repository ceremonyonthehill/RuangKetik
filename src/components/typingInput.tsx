type Props = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function typingInput({
    value,
    onChange
}: Props){


    return(
        <div>
              <input value={value} onChange={onChange} autoFocus className='max w-150 text-center mb-5'/>
        </div>
    )
}