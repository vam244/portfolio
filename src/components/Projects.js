import React, { useState } from 'react'
import Ecomerce from '../assests/download.jpg'
import aud from '../assests/aud.jpg'
import project from '../assests/download (1).jpg'
import note from '../assests/images.jpg'
import { CgClose } from 'react-icons/cg'
import { SiGithub } from 'react-icons/si'
import { RiLink } from 'react-icons/ri'
import { Transition } from '@headlessui/react'
import Slide from 'react-reveal/Slide';

const Projects = () => {
    const [showEcoomerce, setShowEcommerce] = useState(false);

    const [showTesla, setShowTesla] = useState(false);
    const [showProjest, setShowProjest] = useState(false);
    const [showNotesapp, setshowNotesapp] = useState(false);

    return (
        <div name='projects' className='bg-lb h-[100%] flex flex-col items-center'>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Projects</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[110px] sm:w-[140px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 gap-y-5 md:grid-cols-2'>
                    <Slide left>
                        <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowEcommerce(true)}>
                            <div className='project_img'>
                                <img className='rounded-[10px] '  style={{width:"100%"}}src={Ecomerce} alt='Ecommerce' />
                            </div>
                            <p className='text-[25px] font-[700] mt-[20px]'>Ecommerce Hub </p>
                        </div>
                    </Slide>
                    
                    <Slide right>
                        <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowTesla(true)}>
                            <div className='project_img'>
                                <img className='rounded-[10px] ' src={aud} alt='Ecommerce' />
                            </div>
                            <p className='text-[25px] font-[700] mt-[20px]'>IEEE audition website</p>
                        </div>
                    </Slide>
                    <Slide left>
                        <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowProjest(true)}>
                            <div className='project_img'>
                                <img className='rounded-[10px] '  style={{width:"80%", margin:"20px"}}src={project} alt='Projest' />
                            </div>
                            <p className='text-[25px] font-[700] mt-[20px]'>IEEE official site</p>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setshowNotesapp(true)}>
                            <div className='project_img'>
                                <img className='rounded-[10px] 'style={{width:"100%",marginTop:"20%"}} src={note} alt='resume' />
                            </div>
                            <p className='text-[25px] font-[700] mt-[20px]'>SDV workshop</p>
                        </div>
                    </Slide>
                </div>
            </div>
            <Transition
                show={showEcoomerce}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowEcommerce(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={Ecomerce} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Ecommerce Hub</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• This is an Ecommerce project where we have implemented all the functionalities of a website
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[20px]'>• The project includes user authentication such as login and signup. it includes of search based on input and fully funtional cart where user can add ,update and delete .</p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, django,DJANGO REST API</p>

                                        <div className='grid grid-cols-1 mt-[30px]' style={{display:"flex"}}>
                                             <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://vam-ecom-f.onrender.com' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            {/*<a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/vam244/frontend_ecommerce.git' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />frontend</a>*/}
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            
            <Transition
                show={showTesla}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowTesla(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={aud} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>IEEE audtion</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• I contributed  in the making of the audtion website by additing validation feature to it to avoid incomplete entries.
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> React.js, Html, Javascript, Css, firebase</p>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://ieee-aud-pr.onrender.com' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            {/* <a className='box_shadow my-[30px] lg:my-0 lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Tesla-UI' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showProjest}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowProjest(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={project} alt='Projest' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>IEEE</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>this a responsive website build in wordpress
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> wordpress</p>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://edu.ieee.org/in-nitdgp/' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />Live</a>
                                            {/* <a className='box_shadow my-[30px] lg:my-0 lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Projest' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showNotesapp}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setshowNotesapp(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] '  src={note} alt='resume' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>self driving vehicle workshop</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>•I worked as a tutor and techinition in designing and explaing the code along with circuit</p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> ardiuno and c/c++</p>

                                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://www.linkedin.com/posts/balivada-sri-vamsi-5299aa228_hello-connections-i-am-happy-to-announce-activity-7046809824184963072-pUVw?utm_source=share&utm_medium=member_desktop' alt="" target='_blank' rel="noreferrer"><RiLink className='mr-[10px]' color='black' />see the post on linkedin</a>
                                            {/* <a className='box_shadow my-[30px] lg:my-0 lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://github.com/munnokd/Resume-Genrator' alt="" target='_blank' rel="noreferrer"><SiGithub className='mr-[10px]' color='black' />Github </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Projects
