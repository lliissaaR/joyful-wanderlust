import Navbar from '@/scenes/navbar'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import { SelectedPage } from '@/shared/types'


function App() {

  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home)
  return (
    <>
      <div className='app'>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </div>
    </>
  )
}

export default App

