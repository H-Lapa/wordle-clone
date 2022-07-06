import { useEffect, useState } from 'react';
import Key from './Key'

const Keyboard = ({setText, text }) => {
    const firstRow = ['q','w','e','r','t','y','u','i','o','p']; 
    const secondRow = ['a','s','d','f','g','h','j','k','l'];
    const thirdRow = ['z','x','c','v','b','n','m'];

    const [randomWord, setRandomWord] = useState('');
    const [round, setRound] = useState(1);

    useEffect(() => {
        produceWord();
        console.log(randomWord);
    }, []);

    useEffect (() => {
        displayWord(round);
        console.log("displayWord!");
    }, [text]);
    
    console.log(randomWord);
    //random word produced here
    function produceWord () {
        var randomWords = require('random-words');
        let temp = "";
        while (temp.length != 5) {
            temp = randomWords({exactly: 1, maxLength: 5, join: ''});
        }
        setRandomWord(temp);
    }

    function checkWord (word) {
        var checkWord = require('check-if-word'),
        words = checkWord('en'); // setup the language for check, default is en
        return words.check(word);
    }

    function round2arr (round) {
        switch (round) {
            case 1:
                return document.getElementsByClassName("roundOne");
                break;
            case 2:
                return document.getElementsByClassName("roundTwo");
                break;
            case 3:
                return document.getElementsByClassName("roundThree");
                break;
            case 4:
                return document.getElementsByClassName("roundFour");
                break;
            case 5:
                return document.getElementsByClassName("roundFive");
                break;
        }
    }

    function displayWord (round) {
        const c = round2arr(round);
        for (let i = 0; i < 5; i++) {
            c[i].textContent = ' ';
            c[i].textContent = text[i];
            console.log(text[i]);
        }
    }

    

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

    function enterWord (round) {
        console.log("enterWord activated")
        //makes sure word exists in dictionary and text legnth is right
        if (checkWord(text.join('')) && text.length == 5) {
            const col = round2arr(round);
            //looping through all 5 letters to perform checks
            for (let i = 0; i < 5; i++) {
                //if generated word letter == word letter inputted
                if (randomWord[i] == text[i]) {
                    //this means its in the right position
                    col[i].style.backgroundColor = "green";
                    console.log("green")
                } else if (checkForLetter(i)) {
                    //checks if letter is present
                    col[i].style.backgroundColor = "yellow";
                    console.log("yellow")
                } else {
                    col[i].style.backgroundColor = "red";
                    console.log("red")
                }

            }

            setRound(round+1);
            for (let x = 0; x < 5; x++) {
                col[x].value = text[x];
                
            }
            //change the color of the letters
            //use class to find elements, then change their colors acordingly
            //loop through array of element, check value against text

            //setting the text blanck for the next line
            setText([]);

        } else {
            console.log("enter issue");
            //produce error message, word isnt real
            //or there isnt enough letters placed down
        }
    }

    function checkForLetter (i) {
        //loop to check if letter exists in the word
        for (let z = 0; z < 5; z++) {
            //checks all letters against the single inputted letter
            if (randomWord[z] == text[i]) {
                //incorrect position but exists in word
                
                return true;
            }   
        }
        return false;
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

                <div onClick={() => enterWord(round)}>
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