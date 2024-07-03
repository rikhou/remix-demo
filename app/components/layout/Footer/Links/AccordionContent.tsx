import {useEffect, useState, ReactNode} from 'react'
import {AIcon, ATypography} from 'mui'
import {Box, MobileStepper} from '@mui/material'
import useDeviceView from 'hooks/useDeviceView'

interface AccordionContentProps {
  title?: string
  children: ReactNode
}
const AccordionContent = (props: AccordionContentProps) => {
  const {title, children} = props
  const {isDesktopView, isDesktopDownView} = useDeviceView()

  const [open, setOpen] = useState(true)
  const handleToggle = () => {
    if (isDesktopDownView) {
      setOpen(!open)
    }
  }
  useEffect(() => {
    if (isDesktopView) {
      setOpen(true)
    }
    if (isDesktopDownView) {
      setOpen(false)
    }
  }, [isDesktopView, isDesktopDownView])
  return (
    <>
      <Box sx={{display: 'flex', height: '1.2rem', justifyContent: 'space-between', mb: 1}} onClick={handleToggle}>
        <ATypography component='h3' variant='buttonStandard'>
          {title}
        </ATypography>
        {isDesktopDownView && <AIcon icon={open ? 'RegularAngleUp' : 'RegularAngleDown'} fontSize='small' />}
      </Box>
      <MobileStepper
        variant='progress'
        steps={8}
        position='static'
        activeStep={1}
        aria-hidden
        sx={{
          p: 0,
          flexGrow: 1,
          background: 'transparent',
          '& .MuiMobileStepper-progress': {
            height: '0.125rem',
            width: '100%',
            backgroundColor: 'grey.300',
          },
        }}
        backButton={<></>}
        nextButton={<></>}
      />

      <Box sx={{display: open ? 'block' : 'none'}}>{children}</Box>
    </>
  )
}

export default AccordionContent
