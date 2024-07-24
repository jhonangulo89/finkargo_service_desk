import { useEffect, useMemo, useState } from 'react'
import MaterialUITable from '@components/MaterialUITable'
import { getTickets } from '@services/tickets'
import PageTitle from '@components/PageTitle'
import ChipStatus from '@components/ChipStatus'
import { TicketBase } from '@models/TicketModels'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { ColumnDef } from '@tanstack/react-table'
import { StatusModel } from '@models/generalModels'

const Tickets = () => {
  const [tickets, setTickets] = useState([])

  const columns = useMemo<ColumnDef<TicketBase, unknown>[]>(
    () => [
      {
        header: 'Titulo',
        accessorKey: 'title'
      },
      {
        header: 'Tipo',
        accessorKey: 'type'
      },
      {
        header: 'Estado',
        accessorKey: 'status',
        cell: ({ row, getValue }) => {
          return <ChipStatus value={getValue() as StatusModel} key={row.id} />
        }
      },
      {
        header: 'Prioridad',
        accessorKey: 'priority'
      },
      {
        header: 'Proyecto',
        accessorFn: (row) => `${row.project.name}`
      },
      {
        header: 'Creado por',
        accessorFn: (row) => `${row.user.firstName} ${row.user.lastName}`
      },
      {
        header: 'Creado',
        accessorKey: 'createdAt',
        cell: ({ getValue }) =>
          new Date(getValue() as Date).toLocaleDateString()
      },
      {
        header: 'Actualizado',
        accessorKey: 'updatedAt',
        cell: ({ getValue }) =>
          new Date(getValue() as Date).toLocaleDateString()
      }
    ],
    []
  )
  useEffect(() => {
    if (tickets.length === 0) {
      getTickets({ path: '', config: {} }).then(({ data }) => {
        setTickets(data)
      })
    }
  }, [tickets.length])

  return (
    <>
      <PageTitle />
      {/* <TicketsKpis /> */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic-search"
            label="Buscar"
            value=""
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              backgroundColor: 'common.white'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <FormControl
            fullWidth
            size="small"
            sx={{
              backgroundColor: 'common.white'
            }}
          >
            <InputLabel id="simple-select-label-status">Estado</InputLabel>
            <Select
              labelId="simple-select-label-status"
              id="simple-select-status"
              value=""
              label="Estado"
              // onChange={handleChange}
            >
              <MenuItem value="abierto">Abierto</MenuItem>
              <MenuItem value="en proceso">En proceso</MenuItem>
              <MenuItem value="cerrado">Cerrado</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <FormControl
            fullWidth
            size="small"
            sx={{
              backgroundColor: 'common.white'
            }}
          >
            <InputLabel id="simple-select-label-priority">Prioridad</InputLabel>
            <Select
              labelId="simple-select-label-priority"
              id="simple-select-priority"
              value=""
              label="Prioridad"
              // onChange={handleChange}
            >
              <MenuItem value="baja">Baja</MenuItem>
              <MenuItem value="media">Media</MenuItem>
              <MenuItem value="alta">Alta</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <FormControl
            fullWidth
            size="small"
            sx={{
              backgroundColor: 'common.white'
            }}
          >
            <InputLabel id="simple-select-label-project">Proyecto</InputLabel>
            <Select
              labelId="simple-select-label-project"
              id="simple-select-project"
              value=""
              label="Proyecto"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Finkargo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={1}>
          <Button variant="contained" startIcon={<Add />} disableElevation>
            Nuevo
          </Button>
        </Grid>
      </Grid>
      <MaterialUITable columns={columns} data={tickets} />
    </>
  )
}

export default Tickets
