import Heroimg2 from '../components/Heroimg2';
import Form from "../components/Form";
import Navbar from '../components/Navbar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <ToastContainer />
    </div>
  )
}

export default Contact