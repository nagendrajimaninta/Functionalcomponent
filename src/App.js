import "./styles.css";
import React,{useState} from 'react';
function Counter(props){
  const {startFrom} = props;
  let startVal = 0;
  if(startFrom){
    startVal=startFrom;
  }
  function onClickHandler(){
    
      setNum(num+1);
  }
  const [num,setNum] = useState(0);
  return (
    <>
    <h1>{num}</h1>
    <button onClick={onClickHandler}>Inc</button>
    </>
  );
}
export default function App() {
  return <Counter />;
}
