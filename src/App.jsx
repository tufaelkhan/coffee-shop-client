import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loddedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loddedCoffees)

  return (
    <div className='bg-orange-100 p-20 m-10'>
      <h1 className='text-6xl text-purple-600 mt-5 text-center font-extrabold'>Chines HOT Coffee House!!:{coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        >{coffee.name}</CoffeeCard>)
      }
     </div>
    </div>
  )
}

export default App
