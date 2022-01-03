import './App.css';
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div className='backgroundImage'>
      <Header />
      <div className='w-7/12 bg-white flex m-auto px-8 relative pt-8 rounded middleContent'>
         <Outlet />
      </div>
    </div>
  );
}

export default App;
