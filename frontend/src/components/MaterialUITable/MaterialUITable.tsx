import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import {
  // Column,
  // Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender
} from '@tanstack/react-table'
import { alpha, useTheme } from '@mui/material/styles'

interface TableProps<T extends object> {
  columns: ColumnDef<T>[]
  data: T[]
}

const MaterialUITable = <T extends object>({
  data,
  columns
}: TableProps<T>) => {
  const theme = useTheme()
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false
  })

  // const { pageSize, pageIndex } = table.getState().pagination

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:nth-of-type(odd)': {
                      backgroundColor: alpha(theme.palette.grey[100], 0.8)
                    },
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.2)
                    }
                  }}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: data.length }]}
        component="div"
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        slotProps={{
          select: {
            inputProps: { 'aria-label': 'rows per page' },
            native: true
          }
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={(e) => {
          const size = e.target.value ? Number(e.target.value) : 10
          table.setPageSize(size)
        }}
        ActionsComponent={TablePaginationActions}
      />
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
    </Box>
  )
}

export default MaterialUITable
