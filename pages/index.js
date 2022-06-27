import Head from 'next/head'
import Image from 'next/image'
import Keyboard from '../components/Keyboard'
import Display from '../components/Display'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState([]);
  const [round, setRound] = useState(1);

  return (
    <div>
      <div>
        <Display arr={text} round={round}/>
      </div>

      <div className='absolute bottom-0 w-11/12 m-auto flex'>
        <Keyboard setText={setText} text={text} setRound={setRound} round={round} />
      </div>
    </div>
  )
}
