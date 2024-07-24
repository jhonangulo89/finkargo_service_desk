import { useTable, Column } from 'react-table'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { alpha, styled, useTheme } from '@mui/material/styles'

// Estilización personalizada de las celdas con ancho ajustado
const StyledTableCell = styled(TableCell)(() => ({
  fontSize: '14px', // Tamaño de fuente más pequeño
  padding: '8px', // Espaciado interno más pequeño
  whiteSpace: 'nowrap', // Evitar el ajuste de texto
  overflow: 'hidden', // Ocultar texto desbordante
  textOverflow: 'ellipsis' // Mostrar puntos suspensivos para texto largo
}))

// Estilización personalizada de las filas con color de fondo en hover
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: alpha(theme.palette.grey[200], 0.8)
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2)
  },
  '&:last-child td, &:last-child th': {
    // border: 0 // Sin borde en la última fila
  }
}))

interface TableProps<T extends object> {
  columns: Column<T>[]
  data: T[]
}

const MaterialUITable = <T extends object>({
  columns,
  data
}: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<T>({ columns, data })
  const theme = useTheme()

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        maxHeight: '500px',
        minHeight: '600px',
        overflow: 'auto'
      }}
      elevation={0}
    >
      <Table {...getTableProps()} stickyHeader>
        <TableHead
          sx={{
            '.MuiTableCell-root': {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderBottom: `1px solid ${theme.palette.divider}`
            }
          }}
        >
          {headerGroups.map((headerGroup) => (
            <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <StyledTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <StyledTableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MaterialUITable
