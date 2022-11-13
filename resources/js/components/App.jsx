import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './employeeList/Table'
import Pagination from "./pagination/Pagination";

function App() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const fetchRows = async () => {
            setLoading(true);
            const res = await axios.get('/get/employee/list');
            setRows(res.data);
            setLoading(false);
        };

        fetchRows();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Table rows={currentRows} loading={loading}/>
                <Pagination
                    rowsPerPage={rowsPerPage}
                    totalRows={rows.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default App;
