import { useTheme, alpha } from '@mui/material/styles'
import { Avatar, Card, CardHeader, Grid } from '@mui/material'
import { Folder } from '@mui/icons-material'

const TicketsKpis = () => {
  const theme = useTheme()
  return (
    <Grid container pb={3} spacing={3}>
      <Grid item>
        <Card
          sx={{
            display: 'flex',
            width: 360,
            '&::before': {
              contain: '',
              position: 'absolute',
              width: '210px',
              height: '210px',
              background:
                'linear-gradient(140.9deg, rgb(255, 193, 7) -14.02%, rgba(144, 202, 249, 0) 70.5%)',
              borderRadius: '50%',
              top: '-160px',
              right: '-130px'
            }
          }}
          elevation={0}
        >
          <CardHeader
            avatar={
              <Avatar
                variant="rounded"
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.2)
                }}
                aria-label="recipe"
              >
                <Folder color="primary" />
              </Avatar>
            }
            title="200"
            subheader="Tickets"
            titleTypographyProps={{
              variant: 'h4'
            }}
            subheaderTypographyProps={{
              variant: 'subtitle2'
            }}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default TicketsKpis
