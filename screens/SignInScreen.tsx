import { Button, Center, FormControl, Heading, Input, Stack } from 'native-base';
import * as React from 'react'
import { useForm, Controller } from 'react-hook-form';

type LoginFormData = {
  username: string
  password: string
}

export default function Signin() {
  const [show, setShow] = React.useState(false)
  const [loginLoading, setLoginLoading] = React.useState(false)
  const [isInvalidForm, setIsInvalidFrom] = React.useState(false)

  const { control, register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handlePasswordClick = () => setShow(!show)

  const onSubmit = (data: any) => {
    setLoginLoading(true)

    setTimeout(() => {
      setLoginLoading(false)
      setIsInvalidFrom(false)
    }, 1000)
  }

  return (
    <Center flex="1" bg="white">
      <Stack space={50} alignItems="center" >
        <Heading>Signin</Heading>
        <FormControl isRequired isInvalid={isInvalidForm}>
          <Stack space={3} minWidth="300px">
            <Input p={2} placeholder="Username" {...register('password')} />
            {errors.username ? <FormControl.HelperText>Username is required.</FormControl.HelperText> : null}

            <Input
              p={2}
              placeholder="Password"
              type={show ? 'text' : 'password'}
              {...register('password')}
              InputRightElement={
                <Button
                  colorScheme="primary"
                  ml={1}
                  roundedLeft={0}
                  roundedBottomRight={0}
                  onPress={handlePasswordClick}
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              }
            />
            {errors.password ? <FormControl.HelperText>Password is required.</FormControl.HelperText> : null}
            <FormControl.ErrorMessage>Username or password is invalid</FormControl.ErrorMessage>
            <Button isLoading={loginLoading} colorScheme="primary" onPress={handleSubmit(onSubmit)}>
              Login
            </Button>
          </Stack>


          </FormControl>
      </Stack>


    </Center>
    )
}