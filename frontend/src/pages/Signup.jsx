import React from 'react';
import auth from "../assets/auth.jpg"
import {Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EyeOff, Eye } from 'lucide-react';
// import Signup from './Signup';
import { Button } from '@/components/ui/button';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';








const Signup = () => {
    const[showPassword, setPassword]= useState(false);
    const navigate = useNavigate()
    const [user, setUser] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password:"",
        })
    
        const handleChange =(e)=>{
            const {name, value} = e.target
            setUser((prev)=>({
                ...prev,
                [name]:value
            }));
        }
    
        const handleSubmit = async(e) =>{
            e.preventDefault()
            console.log(user);

            try{
                const res = await axios.post('http://localhost:5000/api/v1/user/register',user, {
                        headers:{
                            "Content-Type":"application/json"
                        },
                        withCredentials:true
                })

                if(res.data.success){
                        navigate('/login');
                        // toast.success(res.data.message)
                }

            }catch(error){
                console.log(error);
                // toast.error(error.response.data.message)
                
            }
        }
    return (
        <div className='flex h-screen md:pt-14 md:h-[760px]'>
            <div className='hidden md:block'>
                <img src={auth} alt="" className='h-[760px]' />

            </div>

            <div className='flex justify-center items-center flex-1 px-4 md:px-0'>
                <Card className ='w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray--800 dark:body-gray-600'>
                    <CardHeader>
                        <CardTitle>
                            <h1 className='text-center text-xl font-semibold'>Create an account</h1>
                        </CardTitle>

                        <p className='mt-2 text-sm font-serif text-center dark:text-gray-300'>Enter your details below to create an account</p>

                    </CardHeader>
                    <CardContent>
                        <form className='space-y-4v ' onSubmit={handleSubmit}>
                            <div className='flex gap-3'>
                                <div>
                                    <Label>First Name</Label>
                                    <Input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    className='dark;border-gray-600 dark:bg:gray-900'
                                    value={user.firstName}
                                    onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <Label>Last Name</Label>
                                    <Input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    className='dark;border-gray-600 dark:bg:gray-900'
                                    value={user.lastName}
                                    onChange={handleChange}
                                    />
                                </div>

                            </div>

                            <div>
                                <Label>Email</Label>
                                <Input
                                type='email'
                                placeholder='name@example.com'
                                name='email'
                                className='dark:border-gray-600 dark:bg-gray-900'
                                  value={user.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='relative '>
                                <Label>Password</Label>
                                <Input

                                type= {showPassword ? "text":"password"}
                                placeholder='Create a Password'
                                name='password'
                                className='dark:border-gray-600 dark:bg-gray-900'
                                  value={user.password}
                                    onChange={handleChange}
                                />

                                <button  onClick={()=>setPassword(!showPassword)}  type='button' className='absolute right-3 top-6 text-gray-500'>
                                    {showPassword? <EyeOff  size={20}/>: <Eye size={20}/>}
                                </button>

                            </div>
                            <Button type='submit' className='w-full'>Signup</Button>
                            <p className='text-center text-gray-600 dark:text-gray-300'>Already Have an Account? <Link to={'/login'}> <span className='underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-100'>Sign in</span></Link></p>


                        </form>
                    </CardContent>

                </Card>
            </div>
            
        </div>
    );
};

export default Signup;