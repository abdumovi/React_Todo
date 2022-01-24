import { useState } from 'react';
import "./style.css";
import "./flexboxgrid.css";
import Form from './components/forma/Form';
import SortCard from './components/sort-card/SortCard';
function App() {
  const [listBase,setListBase] = useState([]);
  return (
    <div className='container'>
        <h1 className="title">Contact Book</h1>
        <div className="row">

          <Form data={listBase} setData={setListBase}/>

          <SortCard data={listBase}/>

        </div>
    </div>
  );
}

export default App;
