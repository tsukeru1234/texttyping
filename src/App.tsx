
import Received from "./components/Received"
import Header from "./components/Header"


const App = () => {
  return (
    <div 
    className="min-w-screen min-h-screen pl-50 pr-50 pt-10"
    style={{backgroundColor: '#040628'}}>
      <Header />
      <Received/>
    </div>
  )
}

export default App
