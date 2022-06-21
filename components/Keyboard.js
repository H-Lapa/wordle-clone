import Key from './Key'

const Keyboard = ({setText, text}) => {
    const firstRow = ['q','w','e','r','t','y','u','i','o','p']; 
    const secondRow = ['a','s','d','f','g','h','j','k','l'];
    const thirdRow = ['z','x','c','v','b','n','m'];

    function updateArr(letter) {
        console.log(text);
        console.log(letter);
        console.log("hello");
        setText([...text, letter]);
    }

    return (
        // keyboard
        <div>
        {/* firstRow */}
        <>
            {/* keyboard */}
            {/* firstRow */}
            <div className="max-w-full flex flex-row">
                {/* letter */}
                {firstRow.map((symbol) => {
                    return (
                        <div onClick={() => updateArr(symbol)}>
                            <Key letter={symbol} />
                        </div>
                    )
                })}
            </div>

            {/* second row */}
            <div className="max-w-full flex flex-row">
                {/* letter */}
                {secondRow.map((symbol) => {
                    return <Key letter={symbol} />;
                })}
            </div>

            {/* third row */}

            <div className="max-w-full flex flex-row">
                <Key letter={"Enter"} className=""></Key>

                {/* letter */}
                {thirdRow.map((symbol) => {
                    return <Key letter={symbol} />;
                })}

                <Key letter={"<"}></Key>
            </div>
            
        </>
        </div>
    )
}

export default Keyboard;