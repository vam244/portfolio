import React from 'react'

const Experience = () => {
    return (
        <div name='experience' className='bg-lb h-[100%] flex flex-col items-center  '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className=' text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Experience</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[130px] sm:w-[170px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 px-6'>
                    {/* <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Job Experience :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px]  sm:text-[25px] font-bold mb-[10px]'>Software Developer</h1>
                        <div className='flex justify-between mb-[30px]'>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>DasInfomedia - Ahmedabad</p>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>Jan - 2023</p>
                        </div> */}
                        {/* <p className='text-[14px] sm:text-[17px]'>Currently, I am a Software Developer Intern at DasInfomedia, working on a live project using React.js. This project (of Gujarat Government's Education Department) involves creating a Vehicle Tracking System using React.js, MUI, Docker, MariaDB, Node.js, Express.js, and API</p>
                    </div> */}
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'> Experience :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>IEEE SB NITDGP(MARCH 2021-PRESENT) </h1>
                        <h6 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>role:senior web developer and technition</h6>
                        <p className='text-[14px] sm:text-[17px]'>I worked on multiple projects as a web Developer and technitian.please continue to scroll to see my works</p>
                    </div>
                    <br/>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>SustainMall </h1>
                        <h6 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>role: web developer</h6>
                        <p className='text-[14px] sm:text-[17px]'>worked on the main website of the company by contributing to 3 features namealy cart,search and footer and the made 60% of the old website </p>
                    </div>
                    <br/>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Debating Society(Jan 2021-jan 2022) </h1>
                        <h6 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>role:debater and content writer</h6>
                        <p className='text-[14px] sm:text-[17px]'>Developed content for various posts ranging from advertising to ceremonial and participated in various intra club debates</p>
                    </div>
                    <br/>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Education Qualification :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>B.Tech- electrical engineering</h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>National institute of technology, durgapur</p>
                            <p className='text-[15px] sm:text-[18px]'>2021 - 2025</p>
                        </div>
                    </div>
                    <br/>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>early Education</h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>Delhi public school,visakhapatnam</p>
                            <p className='text-[15px] sm:text-[18px]'>2009-2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
