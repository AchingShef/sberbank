import React, { Component } from 'react';

class ProgressBar extends Component {
    /**
     * Расчет длины индикатора по отношению к макс значению
     *
     * @returns
     * @memberof ProgressBar
     */
    calcRatio() {
        return Math.abs(Math.ceil((this.props.delta / this.props.max) * 100));
    }

    render() {
        let statusClass = this.props.negative ? "negative": "positive";

      return (
        <div className="progress">
            <div className={`bar ${statusClass}`} style={{width: `${this.calcRatio()}%`}}></div>
        </div>
      );
    }
  }

export default ProgressBar;