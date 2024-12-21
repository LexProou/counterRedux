// import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { inc, dec } from './actions'
import './App.css'



function App() {
   
  const counter = useSelector((state) => state.counter )
  const dispatch = useDispatch()


  return(
    <>
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(dec())}>Decrement</button>
    </div>
    </>
  )
}

export default App

// --- COUNTER WITHOUT USING REDUX ---

// function App() {
//    const [count, setCount] = useState(0)

//    const inc = () => {
//      setCount( count + 1)
//    }

//    const dec = () => {
//      setCount( count - 1 )
//    }

//   return(
//     <>
//     <div className="App">
//       <h1>Counter:{count}</h1>
//       <button onClick={inc}>Increment</button>
//       <button onClick={dec}>Decrement</button>
//     </div>
//     </>
//   )
// }

// export default App


































// // import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { inc, dec } from './actions'

// import './App.css'

// function App() {

//   // const [count, setCount] = useState(0);
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   // const inc = () => {
//   //   setCount(count + 1)
//   // }

//   // const dec = () => {
//   //   setCount(count - 1)
//   // }

//   return (
//     <>
//      <div className="App">
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => dispatch(inc())}>Increment</button>
//       <button onClick={() => dispatch(dec())}>Decrement</button>
//      </div>
       
//     </>
//   )
// }

// export default App
