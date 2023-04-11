import React from 'react'
import './PlansScreen.css'

function PlansScreen() {
    

  return (
    <div className='plansScreen'>
        <div className="plansScreen__plan">
            <div className="plansScreen__info">
                <h5>Product1</h5>
                <h6>Product description</h6>
            </div>
            <button>Subscribe</button>
        </div>

        <div className="plansScreen__plan">
            <div className="plansScreen__info">
                <h5>Product2</h5>
                <h6>Product description</h6>
            </div>
            <button>Subscribe</button>
        </div>

        <div className="plansScreen__plan">
            <div className="plansScreen__info">
                <h5>Product3</h5>
                <h6>Product description</h6>
            </div>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default PlansScreen