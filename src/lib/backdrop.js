import React, { Component } from 'react';
import Store from './store';

class Backdrop extends Component {
    render() {
        return (
            <rect name='backdrop' className='backdrop' 
                x={Store.getMargins().left} 
                y={Store.getMargins().top} 
                width={Store.getSize().width-Store.getMargins().left - Store.getMargins().right} 
                height={Store.getSize().height-Store.getMargins().bottom - Store.getMargins().top}/>
        )
    }
}

export default Backdrop;