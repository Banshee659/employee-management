import React, { Component} from 'react';
import axios from "axios";

class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null
        }
    }

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value
        })
    }

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value
        })
    }

    static getDerivedStateFromProps(props, state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null
        }

        // Updating data from input.

        if (state.employeeName && (state.employeeName !== props.employeeData.currentEmployeeName)) {
            return null;
        }

        if (state.employeeSalary && (state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
            return null;
        }

        // Updating data from props Below.

        if(state.employeeName !== props.employeeData.currentEmployeeName || state.employeeName === props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName
        }

        if(state.employeeSalary !== props.employeeData.currentEmployeeSalary || state.employeeSalary === props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary
        }

        return employeeUpdate;
    }

    updateEmployeeData = () => {
        axios.post('/update/employee', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary
        }).then((response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <div className="modal fade" id={"updateModal"+this.props.modalId } aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form'>
                                <div className="form-group">
                                    <label htmlFor={"employeeName"+this.props.modalId }>Employee Name</label>
                                    <input type="text"
                                           id={"employeeName"+this.props.modalId }
                                           name="employeeName"
                                           className='form-control mb-3'
                                           placeholder="Employee Name" required=""
                                           value={this.state.employeeName ?? ""}
                                           onChange={this.inputEmployeeName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor={"employeeSalary"+this.props.modalId }>Employee Salary</label>
                                    <input type="text"
                                           id="employeeSalary"
                                           className='form-control mb-3'
                                           value={this.state.employeeSalary ?? ""}
                                           onChange={this.inputEmployeeSalary}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="submit"
                                   className="btn btn-info"
                                   value="Update"
                                   onClick={this.updateEmployeeData}
                            />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateModal;
