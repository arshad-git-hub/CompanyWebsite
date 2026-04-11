import { useState } from 'react';
function Faltu() {

    let [count, setCount] = useState(50);

    let displayDataplus = () => {
        setCount(count + 5);
    }
    let displayDataminus = () => {
        setCount(count - 5);
    }

  return (

    <div className="faltu">

      <button className='button ' onClick={displayDataminus} style={{padding: "1rem 2rem", color: "red"}}> <h2> - </h2> </button>

      <h2>{count}</h2>

      <button className='button green' onClick={displayDataplus} style={{padding: "1rem 2rem", color: "red"}}> <h2> + </h2> </button>

    </div>

  )
}

export default Faltu