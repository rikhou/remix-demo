import {List, ListItem} from '@mui/material'
import Link from 'mui/Link'
import {ATypography} from 'mui'

interface LinkContainerProps {
  linkData?: {label: string; path: string}[]
}
const LinkContainer = ({linkData = []}: LinkContainerProps) => (
  <List sx={{display: 'flex', width: '100%', flexWrap: 'wrap', alignItems: 'flex-start'}}>
    {linkData.map((item) => (
      <ListItem key={item.label} disablePadding sx={{width: '50%', pr: '0.375rem'}}>
        <Link
          href={item.path}
          color='grey.900'
          sx={{
            textDecoration: 'none',
            padding: '0.25rem 0',
            '&:hover': {
              md: {
                textDecoration: 'underline',
              },
            },
          }}
        >
          <ATypography variant='bodySmall' component='span'>
            {item.label}
          </ATypography>
        </Link>
      </ListItem>
    ))}
  </List>
)

export default LinkContainer
