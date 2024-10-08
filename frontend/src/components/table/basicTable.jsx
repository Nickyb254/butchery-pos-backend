import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import './table.css'

const BasicTable = (props) => {
   const columns = useMemo(() => COLUMNS, [])
   //const employees = useMemo(() => employees, [])

  const tableInstance = useTable({
    columns: columns,
    data: props.data
  })

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow
   } = tableInstance

  return (
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroup) => (

      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}> {column.render('Header')} </th>
        ))}
      </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {
        rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}> {cell.render('cell')} </td>                    
                  })
                }
              </tr>
            )
        })
      }
    </tbody>
  </table>
  )
}

export default BasicTable