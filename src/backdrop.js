/*
    Copyright (C) 2018  Ermanno Scanagatta

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import React, { Component } from 'react';
import StoreContext from './context';
import { withTheme } from '@callstack/react-theme-provider';

class Backdrop extends Component {
    render() {
        return (
            <StoreContext.Consumer>
                {store =>
                <rect name='backdrop' className='backdrop' fill={this.props.theme.backdropFill}
                    x={store.getMeasures().left} 
                    y={store.getMeasures().top} 
                    width={store.getMeasures().width} 
                    height={store.getMeasures().height}/>
                }
            </StoreContext.Consumer>
        )
    }
}

export default withTheme(Backdrop);