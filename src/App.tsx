import Badge from './components/Badge'
import Box from './components/Box'
import Button from './components/Button'
import Card from './components/Card'

// menggunakan object css
function App() {
  const style : React.CSSProperties = {
    backgroundColor: "white",
    placeItems: "center"
  }
  return (
    // fragment
    <> 
      {/* <Badge/>
    <Box/>
    <Button variant='secondary' size='big'/>
    <Card variant='danger' size='big'/>
    <Card variant='succes' size='small'/> */}
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Button
    </button>
    </>
  )
}

export default App
