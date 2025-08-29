
import './App.css'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import ManageLoan from './components/Loan/ManageLoan'
import Home from './components/Loan/ManageLoan'
// import Home from './pages/Home'

function App() {
  

  return (
    <>
      <div className='app-container'>
        <Header/>
        <ManageLoan/>
        <Footer/>

      </div>
    </>
  )
}

export default App
