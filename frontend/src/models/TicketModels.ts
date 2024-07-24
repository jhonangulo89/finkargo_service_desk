import { StatusModel } from '@models/generalModels'
import { ProjectBase } from '@models/ProjectModels'
import { UserBase } from '@models/UserModels'

export interface TicketBase {
  title: string
  description: string
  status: StatusModel
  type: string
  priority: string
  issueId: string
  createdAt: string
  updatedAt: string
  user: UserBase
  project: ProjectBase
}
