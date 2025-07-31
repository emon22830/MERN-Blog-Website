import React, { useState } from 'react';
import auth from "../assets/auth.jpg"
import {Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EyeOff, Eye } from 'lucide-react';
// import Signup from './Signup';
import { Button } from '@/components/ui/button';
import { Link} from 'react-router-dom';


const Login = () => {
    const[showPassword, setPassword] = useState(false)
    


    return (
     <div className='flex h-screen md:pt-14 md:h-[760px]'>
            <div className='hidden md:block'>
                <img src={auth} alt="" className='h-[760px]' />

            </div>

            <div className='flex justify-center items-center flex-1 px-4 md:px-0'>
                <Card className ='w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray--800 dark:body-gray-600'>
                    <CardHeader>
                        <CardTitle>
                            <h1 className='text-center text-xl font-semibold'>Login into your account</h1>
                        </CardTitle>

                        <p className='mt-2 text-sm font-serif text-center dark:text-gray-300'>Enter your details below to login your account</p>

                    </CardHeader>
                    <CardContent>
                        <form className='space-y-4'>
                            <div className='flex gap-3'>
                


                            </div>

                            <div>
                                <Label>Email</Label>
                                <Input
                                type='email'
                                placeholder='Email address'
                                name='email'
                                className='dark:border-gray-600 dark:bg-gray-900'
                                />
                            </div>

                            <div className='relative '>
                                <Label>Password</Label>
                                <Input

                                type= {showPassword ? "text":"password"}
                                placeholder='Enter your Password'
                                name='password'
                                className='dark:border-gray-600 dark:bg-gray-900'
                                />

                                <button  onClick={()=>setPassword(!showPassword)}  type='button' className='absolute right-3 top-6 text-gray-500'>
                                    {showPassword? <EyeOff  size={20}/>: <Eye size={20}/>}
                                </button>

                            </div>
                            <Button type='submit' className='w-full'>Login</Button>
                            <p className='text-center text-gray-600 dark:text-gray-300'>Don't Have an Account? <Link to={'/signup'}> <span className='underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-100'>Sign Up</span></Link></p>


                        </form>
                    </CardContent>

                </Card>
            </div>
            
        </div>
    );
};

export default Login;