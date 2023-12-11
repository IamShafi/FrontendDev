// 

export default function AlerComponent(){
    const [text, setText] = useState('');
    const showAlert = () =>{
        alert(text);
    }
    return(
        <div>
            <input
            type="text"
            value={text}
            onChange={ (event) =>{
                setText(event.target.value)
            }}
            />
            <button onClick={showAlert}>Show Alert</button>
        </div>
    )
}