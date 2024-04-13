import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';

const SignupComponent = () => {
    return <div className="w-full h-full flex flex-col items-center">
    <div className='logo p-7 border-b border-solid border-gray-200 w-full flex justify-center '>
        <Icon icon="logos:spotify" width= "185"/>
    </div>
    <div className='inputRegion w-1/4 py-10 flex items-center justify-center flex-col'>
        <div className='font-bold mb-9 text-3xl'>Sign up to start listening</div>
        <TextInput 
            label="Email"
            placeholder="name@domain.com"
            className="my-3"
            />
        <TextInput 
            label=" Confirm Email "
            placeholder="name@domain.com"
            className="my-3"
            />
        <PasswordInput 
            label="Create a Password"
            placeholder="Should be atleast 6 characters"
            />
        <TextInput 
            label="Username"
            placeholder="Enter a Username"
            className="my-3"
            />
        <div className='w-full flex items-center justify-center my-9'>
            <button className='bg-green-200 text-lg font-semibold p-2 px-7 rounded-full'>Sign Up</button>

        </div>
        {/* <div className='mb-7 mt-1 underline '>Have an account?</div> */}
        <div className='w-full border border-solid border-gray-200'></div>
        <div className='font-semibold mb-9 my-6 text-lg'>Don't have an account? </div>
        <div className='border border-green-500 w-full flex items-center justify-center rounded-full text-green-500 font-bold py-4 '> 
             <Link to="/login"> LOG IN INSTEAD </Link>
            {/* <button className="text-lg font-semibold rounded-full">
                Sign Up
            </button> */}
        </div>
    </div>
    </div> 

}

export default SignupComponent;