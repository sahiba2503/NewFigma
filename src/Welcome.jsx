import React from 'react'
import iphon1 from "/Devices (5).svg"
import iphon2 from "/iPhone15.svg"



function Welcome() {
  return (
    <div className='outer-main'>
      <div className='welcomImgContent'>
      {/* <div className="welcomiphon"> */}
        <img src={iphon1} alt="" className='iphon1'/>
        <img src={iphon2} alt="" className='iphon2' />
       {/* </div>     */}
      <div className='welcomContent'>
        <div className='welcometoWhere'>
        <span>Welcome To</span>
        <h1>
        Where innovation meets tomorrow</h1>
        </div>
        <div className='WelcomeLorem'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi ab cumque officiis perspiciatis, unde animi quisquam itaque quo ad similique distinctio natus, eius quod maiores doloremque debitis reprehenderit veritatis.</p>
        <div className='outer-welcom-btn'>
        <button>Primary</button>
        <button>Secondary</button>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Welcome
