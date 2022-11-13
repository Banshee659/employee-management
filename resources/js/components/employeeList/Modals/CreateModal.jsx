import React, { Component} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateModal extends Component {

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

    addEmployee = () => {
        axios.post('/add/employee', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(() => {
            toast.success('Employee added successfully');

            setTimeout(() => {
                location.reload();
            }, 2000)
        })
    }

    render() {
        return (
            <div className="modal" id="createModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabelLel">Employee Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form'>
                                <div className="form-group">
                                    <label htmlFor="employeeName">Employee Name</label>
                                    <input type="text"
                                           id="employeeName"
                                           name="employeeName"
                                           className='form-control mb-3'
                                           placeholder="Employee Name"
                                           onChange={this.inputEmployeeName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="employeeSalary">Employee Salary</label>
                                    <input type="text"
                                           id="employeeSalary"
                                           name="employeeSalary"
                                           className='form-control mb-3'
                                           placeholder="Salary"
                                           onChange={this.inputEmployeeSalary}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-info" value="Add" onClick={this.addEmployee} />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateModal;
