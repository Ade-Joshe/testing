import React, { Component, Fragment } from 'react'
import './../App.css'
import MiniCard from './miniCard';

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className='sidebar'>
                    <MiniCard />
                </div>
            </Fragment>
        )
    }
}

export default Sidebar;