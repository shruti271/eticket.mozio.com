import { Typography } from '@mui/material'
import React from 'react'
import Countdown from 'react-countdown';
import '../css/header.css'
const Footer = () => {

  // const [s,setS]=useState(0);
  // var date = new Date();
  // var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
  return (
    <div style={{ backgroundColor: '#777135', color: '#ffffff', height: '30vh', justifyContent: 'content', alignItems: 'center' }} className='headingweb'>
      <div style={{justifyContent: 'content',alignItems:'center',paddingTop:60,paddingLeft:30,paddingRight:30}}>
        <Typography>Please show this screen to the proper authority on board the train.</Typography>

        <Countdown
          // date={newDate}
          date={new Date().getTime() + 20600000}
          // daysInHours="false"
          autoStart='true'
          zeroPadTime={2}

          renderer={(props) => (
            <div style={{ color: '#ffffff', fontSize: 40 }}>

              {String(props.hours).padStart(2, '0')}:{String(props.minutes).padStart(2, '0')}:{String(props.seconds).padStart(2, '0')}

            </div>
          )}
        />
      </div>
    </div>
  )
}

export default Footer
