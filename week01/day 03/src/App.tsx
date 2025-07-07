import './App.css';
import Button from './components/Button';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoArrowForwardOutline } from 'react-icons/io5';

function App() {

  return (
      <div style={{ background: '#dde4e8', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
        <Button label="Get started" rightIcon={<IoArrowForwardOutline />} />
        <Button label="Continue with Apple" leftIcon={<FaApple />} />
        <Button label="Continue with Google" leftIcon={<FcGoogle />} type="outline" />
        <Button label="Continue with Facebook" leftIcon={<FaFacebookF />} type="outline" />
      </div>
      
  )
}

export default App