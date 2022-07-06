import Keyboard from '../components/Keyboard'
import Display from '../components/Display'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState([]);

  return (
    <div>
      <div>
        <Display/>
      </div>

      <div className='absolute bottom-0 w-11/12 m-auto flex'>
        <Keyboard setText={setText} text={text} />
      </div>
    </div>
  )
}
