import { useEffect, useState } from 'react'
import MaterialUITable from '../../components/MaterialUITable'
import { Column } from 'react-table'
import { getProjects } from '../../services/projects'

interface Project {
  projectId: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

const columns: Column<Project>[] = [
  { Header: 'Nombre', accessor: 'name' },
  { Header: 'Descripción', accessor: 'description' },
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

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (projects.length === 0) {
      getProjects({ path: '', config: {} }).then(({ data }) => {
        setProjects(data)
      })
    }
  }, [projects.length])

  return (
    <>
      <div>Projects</div>
      <br />
      <br />
      <MaterialUITable columns={columns} data={projects} />
    </>
  )
}

export default Projects
