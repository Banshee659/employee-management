import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th>{   this.props.data.id  }</th>
                <td>{   this.props.data.employee_name   }</td>
                <td>{   this.props.data.salary  }</td>
                <td>@mdo</td>
            </tr>
        );
    }
}

export default TableRow;
