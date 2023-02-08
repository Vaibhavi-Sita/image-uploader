import './Load.scss'

import React from 'react'
import Card from '../../components/card/card'

function Load() {
  return (
    <Card id='load'>
        <h1>Uploading...</h1>

        <div className='load_bar-base'>
            <div className='load_bar-line'></div>
        </div>
    </Card>
  )
}

export default Load