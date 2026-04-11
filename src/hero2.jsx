// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { students } from './Data/questions';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
// import { CSSTransition } from "react-transition-group";
import { ToastContainer, toast } from 'react-toastify';

function Hero2({theBoy, fullname, address, phone}) {

  // let Click = () => {
  //   document.getElementById('name').innerText = "Hello! I am " + theBoy.name + ". How are you ?";
  // }

  // let status = true;

  // const [status, setstatus] = useState(true)
  // const [pstatus, setPstatus] = useState(false)


  // const clicking = () => {
  //   status = !false;
  // }

  // let notify = () => {
  //   toast.warning('Congratulations', 'You data is saved...');
  // }

  // let saveToDo = (event) => {
  //   let todoData = event.target.todoname.value
  //   event.preventDefault();
  //   toast.success('Great! Your data is getting saved');
    // toast.success('Saved : ' + todoData );
  // } 
  
  return (

    <section className="hero2"> 

      {/* <form action="submit" onSubmit={saveToDo}>
        <h1>To Do's list</h1>

        <div className='tododata'>
          <input type="text" name='todoname'/>
          <ToastContainer />
          <button>Save Data</button>
        </div>

        <div className="output">
          <ul>
            <li>HTML, CSS, JS<span>&times;</span></li>
          </ul>
        </div>


      </form> */}



      {/* <h1>Hello this a notification tester.</h1>
      <ToastContainer />
      <button onClick={notify}>Click to Show</button>
       */}


      {/* <input type={pstatus ? 'Text' : 'Password'}/>
      <button onClick={ () => { setPstatus(!pstatus)
      }}> { pstatus ? 'Hide' : 'Show'}</button> */}


      {/* QUESTIONs */}

      {/* <div className="main-container">

        <h1>Frequently Asked Questions (FAQs)</h1>
        

        {students.map((newsItems) => {
          return (
            <div className="news">
              <h5 onClick={ () => {
                setstatus(!status)
              }}>{newsItems.newshead}</h5>
              <p className='pop'>{newsItems.newsdetails}</p>
            </div>
          )
        })} 
      </div> */}

      {/* <button onClick={clicking} className="{{padding:"1rem 2rem"}} ">Click</button>
        <h2>Click button to view full name ?</h2> */}
        {/* { (status) ? <h1 style={{color: "green"}}>Hello! This is True</h1> : <h1 style={{color: "red"}}>Hello! This is False</h1> } */}
    </section>

  )
}
export default Hero2