import React from 'react'
import Button from '@mui/material/Button';
function Col({colorchange,
    isDark,setColorchang,setDark}) {
  return (
    <div className='App'>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className='App'>
<input
type="text"
placeholder='Enter the name of the color'
value={colorchange}
onChange={(e)=>{setColorchang(e.target.value);
}
}
></input></div>
<br></br>
    <div style={{justifyContent:'center'}}><button onClick={()=>setDark(!isDark)}>
      <Button variant="contained" color='success'>
        Click 
        </Button></button>
        </div>



    </form></div>
  )
}

export default Col;