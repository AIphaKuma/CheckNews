import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/header.jsx'
import Footer from './Components/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <App />
    <Footer/>
  </>,
)
