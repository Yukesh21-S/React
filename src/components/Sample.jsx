import React from 'react'
const Sample = ({colorchange,isDark}) => {
  return (
<section className='box'

style={{backgroundColor:colorchange,color:isDark?"#0000":"#FFFF"}}
>
  <div>
    <p>{colorchange?colorchange:"Empty"}</p>
    <br></br>
    </div>

</section>
  )
}
Sample.defaultProps={
    colorValue:"empty"
}

export default Sample