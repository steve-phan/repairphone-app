import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import PageContainer from '../../components/shared/PageContainer';

const schema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required(),
  password: yup.string().min(6).max(32).required('Password is required'),
});

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <PageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              fullWidth
              label='Email'
              variant='outlined'
              {...field}
              error={!!errors.email}
              helperText={(!!errors.email && errors.email?.message) || ''}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              fullWidth
              label='Password'
              variant='outlined'
              type='password'
              {...field}
              error={!!errors.password}
              helperText={(!!errors.password && errors.password?.message) || ''}
            />
          )}
        />
        <Button
          color='primary'
          variant='contained'
          fullWidth
          type='submit'
          size='medium'
        >
          Submit
        </Button>
      </form>
    </PageContainer>
  );
};
export default SignIn;
