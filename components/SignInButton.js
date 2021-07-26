import * as React from 'react'
import Button from '@material-ui/core/Button';

export default function SignInButton(){
  // const { keycloak } = useKeycloak()
  return (
    <Button
    variant="outlined"
    // onClick={() => {
    //   if (keycloak) {
    //     window.location.href = keycloak.createLoginUrl()
    //   }
    // }}
  >
    Login
  </Button>
  )
}