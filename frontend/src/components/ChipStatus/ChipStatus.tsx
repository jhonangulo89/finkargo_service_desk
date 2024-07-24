import { StatusModel } from '@models/generalModels'
import { Chip } from '@mui/material'
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter'

interface ChipStatusProps {
  value: StatusModel
}

const ChipStatus = ({ value }: ChipStatusProps) => {
  let color: 'success' | 'error' | 'primary' = 'success'
  switch (value) {
    case 'cerrado':
      color = 'error'
      break
    case 'en proceso':
      color = 'primary'
      break
  }

  return (
    <Chip
      size="small"
      label={capitalizeFirstLetter(value)}
      variant="outlined"
      color={color}
    />
  )
}

export default ChipStatus
