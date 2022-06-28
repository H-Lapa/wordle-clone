import Key from './Key'

const Keyboard = ({setText, text, setRound, round}) => {
    const firstRow = ['q','w','e','r','t','y','u','i','o','p']; 
    const secondRow = ['a','s','d','f','g','h','j','k','l'];
    const thirdRow = ['z','x','c','v','b','n','m'];
    
    //random word produced here
    function produceWord () {
        var randomWords = require('random-words');
        let temp = "";
        while (temp.length != 5) {
            temp = randomWords({exactly: 1, maxLength: 5, join: ''});
        }
        return temp;
    }

    function checkWord (word) {
        var checkWord = require('check-if-word'),
        words = checkWord('en'); // setup the language for check, default is en
        return words.check(word);
    }

    const randomWord = produceWord();
    console.log(randomWord)

    function updateArr(letter) {
        if (text.length == 5) {
            console.log("Not enough space");
        } else {    
            setText([...text, letter]);
        }
    }

    function backspace () {
        if (text.length == 0) {
            console.log("array is empty");
        } else {

            setText(text.slice(0, text.length-1));
        }
    }

    function enterWord () {
        setRound(round+1);
    }


    return (
        // keyboard
        <div>
        {/* firstRow */}
        <>
            {/* keyboard */}
            {/* firstRow */}
            <div className="max-w-full flex flex-row justify-center">
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
            <div className="max-w-full flex flex-row justify-center">
                {/* letter */}
                {secondRow.map((symbol) => {
                    return (
                        <div onClick={() => updateArr(symbol)}>
                            <Key letter={symbol} />
                        </div>
                    )
                })}
            </div>

            {/* third row */}

            <div className="max-w-full flex flex-row justify-center">

                <div onClick={enterWord}>
                    <Key letter={"Enter"} className=""></Key>
                </div>

                {/* letter */}
                {thirdRow.map((symbol) => {
                    return (
                        <div onClick={() => updateArr(symbol)}>
                            <Key letter={symbol} />
                        </div>
                    )
                })}

                <div onClick={backspace}>
                    <Key letter={"<"} ></Key>
                </div>
            </div>
            
        </>
        </div>
    )
}

export default Keyboard;