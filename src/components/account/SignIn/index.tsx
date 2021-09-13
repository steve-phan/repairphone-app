import { useFormik } from 'formik';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	// password: yup.string().min(8).max(32).required(),
});

// const validationSchema = yup.object({
// 	email: yup
// 		.string()
// 		.email('Enter a valid email')
// 		.required('Email is required'),
// 	// password: yup
// 	// 	.string()
// 	// 	.min(8, 'Password should be of minimum 8 characters length')
// 	// 	.required('Password is required'),
// });
console.log('xxxxx');
const SignIn = () => {
	const {
		control,
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: any) => console.log(data);
	// const formik = useFormik({
	// 	initialValues: {
	// 		email: '',
	// 		password: '',
	// 	},
	// 	validationSchema: validationSchema,
	// 	onSubmit: (values) => {
	// 		alert(JSON.stringify(values, null, 2));
	// 	},
	// });
	console.log('Email is', watch('email'));
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='email'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<TextField
							fullWidth
							// id='email'
							// name='email'
							label='Email'
							variant='outlined'
							{...field}
							error={!!errors.email}
							helperText={(!!errors.email && errors.email?.message) || ''}
							// {...register('email')}
							// onChange={() => console.log('sdad')}
						/>
					)}
					// {...register('email')}
				/>
				{/* <TextField
					fullWidth
					id='email'
					name='email'
					label='Email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id='password'
					name='password'
					label='Password'
					type='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/> */}
				<Button
					color='primary'
					variant='contained'
					fullWidth
					type='submit'
					// disabled={formik.isValid}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};
export default SignIn;
