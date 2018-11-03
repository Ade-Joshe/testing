import React, { Fragment } from 'react';
import img from '../Assets/Rectangle 2.3.svg'

const MiniCard = (props) => {
    return (
        <Fragment>
            <div className='MiniCardPhoto'>
                {/* {img} */}
                <img src={img} className='' />
                <p>My name</p>
            </div>
        </Fragment>
    )
}

export default MiniCard;