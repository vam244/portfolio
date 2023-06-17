import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiCplusplus, SiWordpress, SiReact, SiBootstrap, SiTailwindcss, SiGithub, SiPython,SiDjango } from 'react-icons/si'
import {  FaMicrochip } from 'react-icons/fa';
// import webHosting from '../assests/web-hosting.png'
// import rest from '../assests/rest.png'
import mui from '../assests/mui.png'
import fire from '../assests/firebase.png'
import Zoom from 'react-reveal/Zoom';

const Technology = () => {
    return (
        <div name='technology' className='bg-lb h-[100%] flex flex-col items-center mb-[35px] '>
            <div className='md:w-[90%] lg:w-[80%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-4 mt-[80px] md:mt-[120px]'>Technology</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[140px] sm:w-[180px] mb-[50px]' />
                <div className='flex flex-col'>
                    <div className=' mt-[10px] grid grid-cols-2 gap-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-5'>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJavascript color='#FFD600' style={{ background: 'black' }} />
                                <p>JavaScript</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiHtml5 color='#E44D26' style={{ background: 'white' }} />
                                <p>HTML</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiCss3 color='#0170BA' style={{ background: 'white' }} />
                                <p>CSS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiCplusplus color='#0170BA' style={{ background: 'white' }} />
                                <p>c/c++</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiDjango color='#3178c6' style={{ background: 'white' }} />
                                <p>Django</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiWordpress color='#F29111' style={{ background: 'white' }} />
                                <p>wordpress</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiReact color='#61dafb' style={{ background: 'white' }} />
                                <p>React Js</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiTailwindcss color='rgb(56, 189, 248)' style={{ background: 'white' }} />
                                <p>Tailwind CSS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiBootstrap color='#712cf9' style={{ background: 'white' }} />
                                <p>Bootstrap</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiGithub color='#24292f' style={{ background: 'white' }} />
                                <p>Git and Github</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <FaMicrochip color='#764abc' style={{ background: 'white' }} />
                                <p>matlab</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiPython color='#43853d' style={{ background: 'white' }} />
                                <p>python</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <FaMicrochip color='#353535' style={{ background: 'white' }} />
                                <p>proteus</p>
                            </div>
                        </Zoom>
                      
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={fire} alt='' style={{ height: '1em', width: '1em' }} />
                                <p>Firebase</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={mui} alt='' style={{ height: '1em', width: '1em' }} />
                                <p>MUI</p>
                            </div>
                        </Zoom>
                        {/* <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={rest} alt='' style={{ height: '1em', width: '1em' }} />
                                <p>Rest API</p>
                            </div>
                        </Zoom> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
