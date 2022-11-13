import React, { Component} from 'react';

import TableRow from './TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from "./Modals/CreateModal";

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],

        }

        if (this.props.loading) {
            return <h2>Loading...</h2>;
        }
    }

    /*componentDidMount() {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        let self = this;

        axios.get('/get/employee/list').then(function (response) {
            self.setState({
                employees: response.data
            })
        })

    }*/

    render() {
        return (
            <div className="container">
                <ToastContainer/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table table-light table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="100px">#</th>
                                        <th scope="col" width="100px">Name</th>
                                        <th scope="col" width="100px">Salary</th>
                                        <th scope="col" width="150px"><button className="btn btn-info"
                                                                              data-bs-toggle="modal"
                                                                              data-bs-target="#createModal">
                                            Add
                                        </button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.rows.map(function (x, i){
                                            return <TableRow key={i} data={x}/>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <CreateModal/>
            </div>
        );
    }
}

export default Table;
