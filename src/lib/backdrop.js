import React, { Component } from 'react';
import Store from './store';

class Backdrop extends Component {
    render() {
        return (
            <rect name='backdrop' className='backdrop' 
                x={Store.getMeasures().left} 
                y={Store.getMeasures().top} 
                width={Store.getMeasures().width} 
                height={Store.getMeasures().height}/>
        )
    }
}

export default Backdrop;