import React from 'react'
import { SiCodechef,SiGithub  } from 'react-icons/si'
import Insta from '../assests/insta.png'
import Linkdin from '../assests/linkdin.png'

const BottomBar = () => {
    return (
        <div className='bg-lb pb-[20px] bottom-0 sm:pb-[40px] w-[100%] flex flex-col items-center justify-between lg:px-[250px] lg:flex-row '>
            <div>
                <h1 className='font-[600] mx-5'> All rights reserved © Balivada sri vamsi | {new Date().getFullYear()}</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 m-[30px] lg:m-0 '>
                <a className='box_shadow rounded-[50px] p-[15px] hover:cursor-pointer' href='https://www.linkedin.com/in/balivada-sri-vamsi-5299aa228' alt="" target='_blank' rel="noreferrer">
                    <img src={Linkdin} alt="Insta" className='min-w-[20px] min-h-[20px] w-[20px] h-[20px]' />
                </a>
                <a className='box_shadow rounded-[50px] p-[15px] hover:cursor-pointer' href='https://github.com/vam244' alt="" target='_blank' rel="noreferrer">
                    <SiGithub size={20}/>
                </a>
                
                <a className='box_shadow mt-5 sm:mt-0 rounded-[50px] p-[15px] hover:cursor-pointer' href='https://www.instagram.com/vamsibalivada25/' alt="" target='_blank' rel="noreferrer">
                    <img src={Insta} alt="Insta" className='min-w-[20px] min-h-[20px] w-[20px] h-[20px]' />
                </a>
                <a className='box_shadow rounded-[50px] p-[15px] hover:cursor-pointer' href='https://www.codechef.com/users/codeiee' alt="" target='_blank' rel="noreferrer">
                    <SiCodechef size={20}/>
                </a>
                
            </div>
        </div>
    )
}

export default BottomBar
