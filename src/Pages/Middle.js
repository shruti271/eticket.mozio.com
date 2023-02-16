import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ticket from '../Assets/SVG/tickets.svg'
import bus from '../Assets/SVG/bus.svg'
import barcode from '../Assets/SVG/barcode.svg'
import { format } from 'date-fns'
import '../css/Middle.css';

// const useStyles = makeStyles(theme => ({
//   validfortravel: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     color:'red',
//   },
// }));


const Middle = () => {

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {    
    setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (seconds === 60) {      
      setMinutes((m) => m + 1);
      setSeconds(s=>0);
    }
    if (minutes >= 60)
      setHours(hours + 1);
  }, [seconds]);
  // const TodayDate = format(new Date(), 'dd/mm/yyyy');
  // var "" = new Date();
  // const classes = useStyles();
  // var date = new Date().toLocaleString("en-US", { month: "long", day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // console.log(format(new Date(), 'MMM dd yyyy, hh:mm:ss a'))

  return (
    <Box >
      <Stack direction={"row"} style={{
        height: "15vh",
        // display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
      }} >
        
        <Box style={{ alignSelf: 'center', width: '43vw' }}>
          <Typography fontSize={27} style={{ lineHeight: 1 }}><b>X<span style={{ fontSize: '40px' }}>1</span></b></Typography>
          <Typography fontSize={15}><b>Passenger(s)</b></Typography>
          <Typography fontSize={15} >1x $10 One-Day Pass</Typography>
        </Box>

        {/* <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}> */}
        <Box style={{ justifyContent: 'center', alignItems: 'center' }}>
          <hr style={{ height: '90%', width: 1, alignSelf: 'center' , marginTop:20, marginBottom:40}} />
          <img src={bus} alt='bus' width={23} style={{ position: 'relative', bottom:100 }} />
        </Box>
        {/* </Box> */}
        <Box style={{ alignSelf: 'center', width: '40vw' }}>
          <img src={ticket} alt='ticket' width={35} />
          <Typography><b>Multi Use Pass</b></Typography>
        </Box>
      </Stack>
      <hr style={{ borderStyle: 'dashed', color: 'grey', marginTop: 20 }} />


      <Box>
        <Typography ><b>Ticket Number : MZ56595644</b></Typography>




        <Box style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={barcode} width="90%" />
          <Box style={{ backgroundColor: '#ffffff', position: 'absolute', top: '20%', left: '15%', width: '70%', height: '60%', fontSize: 22 ,alignSelf:'center'}}>
            {/* <Typography style={{ color: '#3D3D3D', fontSize: '20px' }} >VALID FOR TRAVEL
            </Typography> */}
            <div id='validfortravel'>
              VALID FOR TRAVEL
            </div>
          </Box>
        </Box>


        <Stack direction={"row"} justifyContent="space-around" marginTop={1}>
          <Box style={{
            justifyContent: "center",
            alignItems: "center",
            width: '60vw'
          }}>
            <Typography fontSize={10} variant="bold"><b> CURRENT TIME :</b></Typography>
            <Typography ><b> {format(new Date(), 'MMM dd yyyy, hh:mm:ss a')}</b></Typography>

          </Box>
          <Box fontSize={12}>
            
            <Typography fontSize={10} variant="bold">
              <b>TIME SINCE ACTIVATION: </b> 
              </Typography>
              <Typography> <b> {String(hours).padStart(2,'0')}: {String(minutes).padStart(2,'0')}: {String(seconds).padStart(2,'0')} </b></Typography>
              </Box>
          

        </Stack>
      </Box>
    </Box>
  )
}

export default Middle
