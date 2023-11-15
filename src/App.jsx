import './App.css'
import Navbar from './components/Navbar'
import PostalForm from './components/PostalForm'
import PostalDetail from './components/PostalDetail'

function App() {

  return (
    <div style={{background: "url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg)"}}>
      <div className='bg-slate-200 pb-10 min-h-[100vh]' style={{ background: "rgba(0, 0, 0, 0.7) " }}>
        <Navbar />
        <PostalForm />
        <PostalDetail />
      </div>
    </div>
  )
}

export default App
