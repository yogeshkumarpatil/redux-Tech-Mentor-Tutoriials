import React from 'react'
import { increament, decreafment } from './actions/Index';
function PlusMinus() {
  return (
    <div>
    Functional Component<br />
      <button onClick={() => decreafment()}>-</button> &nbsp;
      0
      &nbsp; <button onClick={() => increament()}>+</button>
    </div>
  )
}

export default PlusMinus
