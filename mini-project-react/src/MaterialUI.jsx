import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
function MaterialUI() {
  return (
    <>
      <Alert severity="error">this is alert</Alert>
      <Button variant="contained" endIcon={<SendIcon />}><h1>Material UI</h1></Button>
      
    </>
  )
}
export default MaterialUI;