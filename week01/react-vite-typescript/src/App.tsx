
import './App.css'
import Button from './compnents/Button';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Button2 from './compnents/Button2';
import { Search } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Signal } from 'lucide-react';
import { CardSim } from 'lucide-react';
import Button3 from './compnents/Button3';
import { FaCamera, FaPhone } from 'react-icons/fa';
import Button4 from './compnents/Button4';
import { FaBell } from 'react-icons/fa';
import Button5 from './compnents/Button5';

function App() {
  return (
    <div style={{display: 'flex'}}>

      <div style={{background: '#dde4e8', width: '250px', height: '600px', padding: '32px 16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
        <Button type='primary' label={'get started '} rightIcon={<IoArrowForwardOutline/>} />
        <Button type='primary' leftIcon={<FaApple size={16} />} label='Continue with Apple' />
        <Button type='outline' leftIcon={<FaFacebookF size={16} />} label={'Continue with Apple'} />
        <Button type='outline' leftIcon={<FcGoogle size={16} />} label={'Continue with Google'} />   
      </div>


      <div style={{background: '#dde4e8', width: '250px', height: '600px',margin: '0 20px', padding: '32px 16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
        <Button2 label={'  '} leftIcon ={<Search size={16} />} rightIcon />
        <Button2 label={'Search'}  leftIcon ={<Search size={16} />} />
        <Button2 label={'Textfield'} labelWeight="bold" labelColor="#000" leftIcon ={<Search size={16} />} />
        <Button2 label={'Search in the web'} leftIcon ={<Search size={16} />} rightIcon = {<Signal size={16}/>}  />
        <Button2 label={'Search crypto'} leftIcon ={<Search size={16} />} rightIcon = {<CardSim size={16}/>}   />
        <Button2 label={'phone number'} rightIcon = { <div style={{
              background: '#d4fcdc',
              padding: '8px',
              borderRadius: '30%',
            }}><Phone size={16} /></div>
          }  />
        <Button2 label={'Search in the web'} leftIcon ={<Search size={16}/>} rightIcon = {<div style={{
              background: '#dce060',
              padding: '8px',
              borderRadius: '30%',
            }}><Signal size={16} /></div>} />

      </div>



      <div style={{background: '#dde4e8', width: '250px', height: '600px',margin: '0 20px', padding: '32px 16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
        <Button3 avatar="./images/avatar1.jpg"
            name="Yolanda"
            subtitle="Web Development"
            rightIcon={<FaCamera />}
          />
                  <Button3 imageLeft="./images/avatar2.jpg"
            name="María"
            rightIcon={<FaPhone />} />

      </div>



      <div style={{background: '#dde4e8', width: '250px', height: '600px',margin: '0 20px', padding: '32px 16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
        
        <Button4 
          avatarUrls={['./images/avatar2.jpg']}
          title="Miriam Jimenez"
          backgroundColor="#00cbe6"
          textColor="white"
        />
        <Button4
          avatarUrls={[
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
          'https://randomuser.me/api/portraits/women/3.jpg',
          ]}
          title="Teams"
          subtitle="Two currently"
          backgroundColor="#8800ff"
          textColor="white"
         />
        
        <Button4 
          avatarUrls={[
          './images/avatar1.jpg',
          './images/avatar2.jpg',
          ]}
          title="New Teams"
          backgroundColor="yellow"
          textColor="black"
        />
      </div>

      <div style={{background: '#dde4e8', width: '250px', height: '600px',margin: '0 20px', padding: '32px 16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
      <Button5 
        avatar="./images/avatar4.png"
        title="Nike store"
        subtitle="6 months of promotions"
        amount="-27.50"
        time="11:00AM"/>
      <Button5 
          message="All your notifications are well turned on"
          iconRight={<FaBell />}
          badge="3"      
      />

      </div>
    








    </div>
    
  
  )
}

export default App
