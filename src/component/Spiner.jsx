import React from 'react'

function Spiner() {
  return (
    <div class="text-center spiner">
    <div class="spinner-border " role="status" style= {{width:"5rem", height: "5rem"}}>
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default Spiner