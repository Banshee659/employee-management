import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow';

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],

        }
    }

    componentDidMount() {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        let self = this;

        axios.get('/get/employee/list').then(function (response) {
            self.setState({
                employees: response.data
            })
        })

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table table-light table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="100px">#</th>
                                        <th scope="col" width="100px">Name</th>
                                        <th scope="col" width="100px">Salary</th>
                                        <th scope="col" width="100px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employees.map(function (x, i){
                                            return <TableRow key={i} data={x}/>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
