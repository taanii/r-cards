
import './App.css';
import Cards from './components/Cards'
import Cards1 from './components/Cards1'
import Cards2 from './components/Cards2'



function App() {
  return (
    <div className="App">
      <div className='section1'>
      <Cards/>
      </div>
      <div className='section2'>
      <Cards1 />
      </div>
      <div className='section3'>
      <Cards2 />
      </div>
    </div>
  );
}

export default App;
