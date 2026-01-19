import { useEffect, useState } from 'react';
import AuthHeader from '../../components/Layout/AuthHeader';
import FormInput from '../../components/ui/FormInput';
import Button from '../../components/ui/Buttons';
import { Link, useNavigate } from 'react-router-dom';
import useLogin from './hook';
import { useFormik } from 'formik';
import { validationSchema } from '../../utils/validations';
import toast from 'react-hot-toast';
import { getItemFromStorage } from '../../helpers/misc';

const Login = () => {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const { handleLogin, loading } = useLogin();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema.login,
		onSubmit: async (values) => {
			try {
				await handleLogin({
					email: values.email,
					password: values.password,
				});
			} catch (error: unknown) {
				const errorMessage =
					error instanceof Error ? error?.message : 'Login failed';
				toast.error(errorMessage);
			}
		},
	});

	useEffect(() => {
		const storedUser = getItemFromStorage('user');
		if (storedUser) {
			navigate('/dashboard');
		}
	}, []);

	return (
		<div>
			<AuthHeader />
			<div className="md:w-[30%] px-2 md:px-0 m-auto mt-9">
				<div className=" text-center mb-9">
					<h2 className="text-[28px] font-bold text-[#101928]">Log In</h2>
					<p className="text-[16px] text-[#667185]">
						Enter your credentials to access your account
					</p>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<div className="mt-9">
						<FormInput
							label="EMAIL ADDRESS"
							type="email"
							name="email"
							value={formik.values.email}
							handleChange={formik.handleChange}
							error={formik.touched.email && formik.errors.email}
						/>
					</div>
					<div className="mt-9">
						<FormInput
							label="PASSWORD"
							type="password"
							name="password"
							value={formik.values.password}
							handleChange={formik.handleChange}
							error={formik.touched.password && formik.errors.password}
						/>
					</div>
					<div className="flex mt-3 justify-between items-center">
						<div className=" flex items-center gap-3">
							<div className="w-[15px]">
								<FormInput
									type="checkbox"
									name="checkbox"
									// value={formData.password}
									handleChange={handleChange}
									style="h-[20px] w-[20px]"
								/>
							</div>
							<p>Remember me for 30 days</p>
						</div>
						<Link to="/" className="text-[#CC400C]">
							Forgot Password?
						</Link>
					</div>

					<div className="w-full mt-5">
						<Button
							text={'Log into Account'}
							type={'submit'}
							styles="w-full"
							position={'center'}
							isLoading={loading}
						/>
					</div>
				</form>
				{/* <div className="flex justify-center items-center gap-2 border mt-9 py-4 rounded-[6px] cursor-pointer">
					<img src="/images/google-logo.png" className="w-[20px] h-[20px]" />
					<p className="text-[#344054] text-[16px]">Continue with Google</p>
				</div>
				<div className="flex justify-center items-center gap-2 border mt-9 py-4 rounded-[6px] cursor-pointer">
					<img src="/images/t-logo.png" className="w-[20px] h-[20px]" />
					<p className="text-[#344054] text-[16px]">Continue with Twitter</p>
				</div> */}
				<div>
					<div className="flex items-center justify-center gap-2 mt-9">
						<p className="text-[#667185] text-[14px]">Are you new here?</p>
						<Link to="/register" className="text-[#CC400C]">
							Create Account
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
