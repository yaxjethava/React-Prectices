import CounterLogik from './CounterLogik'
import Counter from './Counter'

function App() {

  const Component = CounterLogik(Counter)

  return (
    <>
      <Component />
    </>
  )
}

export default App
