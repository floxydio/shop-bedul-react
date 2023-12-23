import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import axios from 'axios'

export default function App() {
  // Untuk handle username input
  const [handleUsername, setHandleUsername] = useState('')
  // -||- password input
  const [handlePassword, setHandlePassword] = useState('')
  // untuk hide show password
  const [isHidePassword, setIsHidePassword] = useState(false)

  // Buat Fungsi untuk click
  function signInFunction() {
    // Gunakan AXIOS -> untuk Fetch lebih mudah
    axios.post("https://fakestoreapi.com/auth/login", {
      username: handleUsername,
      password: handlePassword
    }).then((res) => {
      // Simpen token setelah 200 
      localStorage.setItem("token_bedul", res.data.token)
    }).catch((err) => console.log(err))
  }



  return (
    <>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%,-50%)"
      }}>
        {/* Title */}
        <Typography variant='h3' gutterBottom sx={{
          textAlign: 'center'
        }}>
          Sign In
        </Typography>
        {/* Form Sign In */}

        <div style={{
          marginTop: '70px',
          display: 'flex',
          flexDirection: 'column'
        }}>

          <TextField id="outlined-basic" label="Username" variant="outlined" sx={{
            marginBottom: 3,
            width: 400
          }} onChange={(e) => setHandleUsername(e.target.value)} />

          <TextField type={isHidePassword === false ? 'password' : 'text'} InputProps={{
            endAdornment: (
              <InputAdornment>
                {isHidePassword === false ? <MdOutlineVisibility onClick={() => setIsHidePassword(true)} style={{
                  cursor: 'pointer'
                }} /> : <MdOutlineVisibilityOff onClick={() => setIsHidePassword(false)} style={{
                  cursor: 'pointer'
                }} />}
              </InputAdornment>
            )
          }} id="outlined-basic" label="Password" variant="outlined" sx={{
            marginBottom: 1
          }} onChange={(e) => setHandlePassword(e.target.value)} />
          <Typography variant='body2'>
            Dont Have an account? <span style={{
              cursor: 'pointer',
              color: '#3466C1'
            }}>Sign Up</span>
          </Typography>
          <Button variant='contained' onClick={signInFunction} sx={{
            marginTop: 3
          }}>Sign In</Button>
        </div>

      </Box>

    </>
  )
}