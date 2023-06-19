import {useState} from 'react'
import {
  AppContainer,
  PasswordContainer,
  Heading,
  PasswordText,
  InputType,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const value =
    password.length >= 8 ? '' : 'Your password must be at least 8 characters'
  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <PasswordText>
          Check how strong and secure is your password
        </PasswordText>
        <InputType type="password" onChange={onChangePassword} />
        <ErrorText>{value}</ErrorText>
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
