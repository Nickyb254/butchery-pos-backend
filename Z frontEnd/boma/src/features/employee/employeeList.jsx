import React from 'react';
import { selectAllEmployees } from './employeeSlice';

import { useTable } from 'react-table';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const EmployeeList = () => {
    const data = useSelector(selectAllEmployees)

  const columns = React.useMemo(
    () => [
        {Header: 'Id', accessor: '_id'},
        {Header: 'Employee Name', accessor: 'employeeName'},
        {Header: 'Designation', accessor: 'designation'},
        {Header: 'Phone', accessor: 'phoneNumber'},
        {Header: 'Email', accessor: 'email'}
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default EmployeeList;
