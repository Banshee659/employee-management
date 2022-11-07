import React, { Component} from 'react';
import ViewModal from "./Modals/ViewModal";
import UpdateModal from "./Modals/UpdateModal";

class TableActionButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null,
        }
    }

    getEmployeeDetails = (id) => {
        axios.post('get/employee', {
            employeeId: id
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.employee_name,
                currentEmployeeSalary: response.data.salary
            })
            console.log(response.data)
        })
    }

    render() {
        return (
            <div className="btn-group dropend">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    Actions
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" role="button" data-bs-toggle="modal" data-bs-target={'#viewModal'+this.props.eachRowId}
                       href="#view"
                    onClick={ () => { this.getEmployeeDetails(this.props.eachRowId) }}>
                        View
                    </a>
                    <a className="dropdown-item" role="button" data-bs-toggle="modal" data-bs-target={'#updateModal'+this.props.eachRowId}
                       href="#update"
                        onClick={ () => { this.updateEmployeeDetails(this.props.eachRowId) }}>
                        Update
                    </a>
                    <a className="dropdown-item text-danger"
                       href="#">Delete</a>
                </div>
                <ViewModal modalId={ this.props.eachRowId } employeeData={ this.state }/>
                <UpdateModal modalId={ this.props.eachRowId } employeeData={ this.state }/>
            </div>
        );
    }
}

export default TableActionButtons;
