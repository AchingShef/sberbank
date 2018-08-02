import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar';

class Row extends Component {
    render() {
      return (
        <tr>
            <td>{this.props.data.axis.r[0].sName_RU}</td>
            <td>{this.props.data.axis.r[1].sName_RU}</td>
            <td className="led">
            {this.props.data.fDeltaPlan < 0 && 
                <ProgressBar negative={true} delta={this.props.data.fDeltaPlan} max={this.props.max}/>
            }
            </td>
            <td>{`${this.props.data.fDeltaPlan} ${this.props.data.sMeasDelta_RU}`}</td>
            <td className="led">
            {this.props.data.fDeltaPlan > 0 && 
                <ProgressBar negative={false} delta={this.props.data.fDeltaPlan} max={this.props.max}/>
            }
            </td>
        </tr>
      );
    }
  }

export default Row;