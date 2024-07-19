import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchEmployeesStart } from '../../actions/employees/AllEmployeesSlice.jsx';
import { fetchEmployeesSuccess } from '../../actions/employees/AllEmployeesSlice.jsx';
import { fetchEmployeesFailure } from '../../actions/employees/AllEmployeesSlice.jsx';
import EmployeeTable from '../../../components/table/employeeTable.jsx';

const EmployeeFetcher = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.employees);

  useEffect(() => {
    const fetchEmployees = async () => {
      dispatch(fetchEmployeesStart());
      try {
        const response = await axios.get('http://localhost:3000/employees');
        dispatch(fetchEmployeesSuccess(response.data));        
      } catch (err) {
        dispatch(fetchEmployeesFailure(err.toString()));
      }
    };

    fetchEmployees();
  }, [dispatch]);
  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <EmployeeTable data={data} />}
    </div>
  );
};

export default EmployeeFetcher;
