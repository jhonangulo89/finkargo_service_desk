import { useEffect, useState } from 'react'
import MaterialUITable from '@components/MaterialUITable'
import { Column } from 'react-table'
import { getTickets } from '@services/tickets'
import PageTitle from '@components/PageTitle'

interface Ticket {
  title: string
  description: string
  status: string
  type: string
  priority: string
  issueId: string
  createdAt: string
  updatedAt: string
  user: User
  project: Project
}

export interface User {
  userId: string
  email: string
  firstName: string
  lastName: string
}

export interface Project {
  name: string
  description: string
  projectId: string
  createdAt: string
  updatedAt: string
}

const columns: Column<Ticket>[] = [
  { Header: 'Título', accessor: 'title' },
  { Header: 'Tipo', accessor: 'type' },
  { Header: 'Estado', accessor: 'status' },
  { Header: 'Prioridad', accessor: 'priority' },
  {
    Header: 'Proyecto',
    accessor: 'project',
    Cell: ({ value }) => {
      return value.name
    }
  },
  {
    Header: 'Creado por',
    accessor: 'user',
    Cell: ({ value }) => {
      return `${value.firstName} ${value.lastName}`
    }
  },
  {
    Header: 'Creado',
    accessor: 'createdAt',
    Cell: ({ value }) => new Date(value).toLocaleDateString()
  },
  {
    Header: 'Actualizado',
    accessor: 'updatedAt',
    Cell: ({ value }) => new Date(value).toLocaleDateString()
  }
]

const Tickets = () => {
  const [tickets, setTickets] = useState([])

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
      <MaterialUITable columns={columns} data={tickets} />
    </>
  )
}

export default Tickets
