import {Grid} from '@mui/material'
import {Contacts as ContactsType} from 'redux/reducers/sharedSlice'
import Address from './Address'
import Phone from './Phone'
import Government from './Government'

interface ContactDataProps {
  contactData: ContactsType
}
const Contact = ({contactData}: ContactDataProps) => {
  const {address, phones, government} = contactData

  return (
    <Grid container sx={{py: '1.5rem', justifyContent: 'center'}} component='section' data-ref='footer-contact'>
      {address && <Address address={address} />}
      {phones && <Phone phones={phones} />}
      {government && <Government data={government} />}
    </Grid>
  )
}

export default Contact
