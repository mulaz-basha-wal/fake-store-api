import './App.css';
import Ecommerce from './Ecommerce';
import Categories from './Categories';
import AllProducts from './AllProducts';

function App() {
  return (
    <div className='APP'>
      {true?<Ecommerce/>:""}
      <AllProducts/>
      <Categories/>
    </div>
  );
}

export default App;
