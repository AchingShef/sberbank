import React, { Component } from 'react';

class Row extends Component {
    activateLasers(p1, p2, p3) {
        debugger;
    }
    render() {
      return (
        <tr>
            <td>{this.props.data.axis.r[0].sName_RU}</td>
            <td>{this.props.data.axis.r[1].sName_RU}</td>
            <td className="led"></td>
            <td>{this.props.data.fDeltaPlan}</td>
            <td className="led"></td>
        </tr>
      );
    }
  }

export default Row;