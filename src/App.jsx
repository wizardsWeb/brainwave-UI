import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'

export default function App() {
  return (
    <>
    <h1 className='text-3xl font-bold underline'>
      Hello World!
    </h1>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Button className="mt-10 text-white" href="#login">
        Something
      </Button>
    </div>
      <ButtonGradient />
    </>
  )
}
