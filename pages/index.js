import Head from 'next/head'
import Image from 'next/image'
import Keyboard from '../components/Keyboard'
import Display from '../components/Display'

export default function Home() {
  return (
    <div className=''>
      <div>
        <Display></Display>
      </div>

      <div className='absolute bottom-0 w-11/12 m-auto flex'>
        <Keyboard/>
      </div>
    </div>
  )
}
