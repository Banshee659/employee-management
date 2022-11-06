import React, { Component} from 'react';

class TableActionButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="btn-group dropend">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    Actions
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                       href="#">View</a>
                    <a className="dropdown-item"
                       href="#">Update</a>
                    <a className="dropdown-item text-danger"
                       href="#">Delete</a>
                </div>
            </div>
        );
    }
}

export default TableActionButtons;
