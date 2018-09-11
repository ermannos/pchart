import React, { Component } from 'react';

class Backdrop extends Component {
    render() {
        return (
            <rect name='backdrop' className='backdrop' 
                x={this.props.margins.left} 
                y={this.props.margins.top} 
                width={this.props.size.width-this.props.margins.left - this.props.margins.right} 
                height={this.props.size.height-this.props.margins.bottom - this.props.margins.top}/>
        )
    }
}

export default Backdrop;