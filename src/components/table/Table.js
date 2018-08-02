import React, { Component } from 'react';
import './table.css';
import Row from './components/row/row';

class Table extends Component {
    constructor(props) {
        super(props);

        const HEADERS = this.props.data.axis.r.map((object, i) => {
            return {
                name: object.sAxisName,
                id: object.nAxisID,
                asceding: null,
                key: `axis.r.${i}.sName_RU`
            };
        });

        HEADERS.push({
            name: 'Отклонение от плана',
            id: 0,
            asceding: null,
            key: 'fDeltaPlan'
        });

        this.state = {
            data: this.props.data.r,
            copy: this.props.data.r,
            headers: HEADERS
        };
    }
    sortByDeviation(column, i) {
        const PATH = column.key.split("."),
            get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);
        let data = this.state.copy.slice(0);

        if (column.asceding) {
            data.sort((a, b) => {
                const B_VAL = get(PATH, b),
                    A_VAL = get(PATH, a);

                if (B_VAL < A_VAL) return -1;
                if (B_VAL > A_VAL) return 1;

                return 0;
            });
        } else {
            data.sort((a, b) => {
                const B_VAL = get(PATH, b),
                    A_VAL = get(PATH, a);

                if (A_VAL < B_VAL) return -1;
                if (A_VAL > B_VAL) return 1;

                return 0;
            });
        }

        column.asceding = !column.asceding;
        this.state.headers[i] = column;

        this.setState({
            data: data,
            headers: this.state.headers
        });
    }
    render() {
      const HEADERS = this.state.headers;

      return (
        <table className="main">
            <tbody>
                <tr>
                    {HEADERS.map((column, i) => {
                        if (i === HEADERS.length - 1) {
                            return <td onClick={() => this.sortByDeviation(column, i)} key={i} colSpan="3">{column.name}</td>
                        }

                        return <td onClick={() => this.sortByDeviation(column, i)} key={i}>{column.name}</td>
                    })}
                    
                </tr>
                {this.state.data.map((object, i) => {
                    return <Row data={object} key={i}/>
                })}
            </tbody>
        </table>
      );
    }
  }

export default Table;