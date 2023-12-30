import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from './reactstore/createslice';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';
function App() {
  const fileref=useRef()
  const [data,setdata]=useState(fileref)
  const count = useSelector((state) => state.counter.value)
  const dispatch=useDispatch()


const handlesubmit=async ()=>{
  const formdata=new FormData()
  console.log(fileref.current.files)
  for (let i=0;i<fileref.current.files.length;i++){
    formdata.append('file',fileref.current.files[i])
  }
  console.log(formdata)
  const body={
    body:formdata,
    Headers:{"Content-Type":"multipart/form-data"}
  }
  const a =await axios.post('http://localhost:300/api',formdata
  

  )
}
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(incrementByAmount(3))}>Increment</button>
<input ref={fileref} type='file' multiple={true}></input> 
<img src={data} alt='no'></img>
<button onClick={handlesubmit}>Submit</button>    </div>
      <span>{count}</span>
    </div>
  );
}

export default App;
