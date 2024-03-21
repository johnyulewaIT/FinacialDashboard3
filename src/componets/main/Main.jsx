import React from 'react';
import { motion } from "framer-motion"
import Chart from '../charts/Chart';
import { IoMdTrendingUp } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiMastercardLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoIonitron } from "react-icons/io";
import { IoLogoBehance } from "react-icons/io5";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Main = () => {


    const income =78;
    const expense =58;
    const bonus = 20;

  return (
    <div className='flex flex-col w-full'>
        <div className='flex flex-col lg:flex-row m-4'>
            <motion.section 
                variants={{
                    hidden:{opacity:0},
                    show:{
                        opacity:1,
                        transition:{
                            staggerChildren: 0.25,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
                className='w-full lg:w-[70%]'>
                <div className='grid md:grid-cols-3 py-2 rounded-xl bg-gradient-to-b md:bg-gradient-to-r from-middark via-middark to-pink/10'>
                    <motion.div 
                        variants={{hidden:{opacity:0}, show:{opacity:1}}}
                        className='flex items-center justify-center md:justify-start h-24 mx-4'>
                        <div className='flex items-center gap-4 w-full justify-between md:justify-center'>
                    <div>
                        <div className='text-sm text-white/50'>
                            Total Income
                        </div>
                        <div className='text-xl font-semibold'>
                            $450.00
                        </div>
                    </div>
                    <div style={{width: 80, height:80,}}>
                        <CircularProgressbar
                            value={income} text={`${income}%`}
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "pink",
                                trailColor: "gray"
                            })}
                        />
                    </div>
                            </div>
                    </motion.div>
                   <motion.div 
                        variants={{hidden:{opacity:0}, show:{opacity:1}}}
                        className='flex items-center justify-center md:justify-start h-24 mx-4'>
                    <div className='flex items-center gap-4 w-full justify-between md:justify-center'>
                    <div>
                        <div className='text-sm text-white/50'>
                            Total Income
                        </div>
                        <div className='text-xl font-semibold'>
                            $250.00
                        </div>
                    </div>
                    <div style={{width: 80, height:80,}}>
                        <CircularProgressbar
                            value={expense} text={`${expense}%`}
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "pink",
                                trailColor: "gray"
                            })}
                        />
                    </div>
                        </div>
                   </motion.div>
                    <motion.div 
                        variants={{hidden:{opacity:0}, show:{opacity:1}}}
                        className='flex items-center justify-center md:justify-start h-24 mx-4'>
                        <div className='flex items-center gap-4 w-full justify-between md:justify-center'>
                            <div>
                                <div className='text-sm text-white/50'>
                                    Total Bonus
                                </div>
                                <div className='text-xl font-semibold'>
                                    $150.00
                                </div>
                            </div>
                            <div style={{width: 80, height:80,}}>
                                <CircularProgressbar
                                    value={bonus} text={`${bonus}%`}
                                    styles={buildStyles({
                                        textColor: "white",
                                        pathColor: "pink",
                                        trailColor: "gray"
                                    })}
                                />
                            </div>
                        </div>
                    </motion.div>
                   
                </div>
                <div className='grid md:grid-cols-4 mt-4 py-4 gap-4 rounded-xl'>
                    <div className='col-span-4 p-4 h-80 rounded-lg row-span-4 bg-gradient-to-b md:gradient-to-r from-middark via-middark to-pink/10'>
                        <Chart />
                    </div>
                    <div className='col-span-4 md:col-span-2 h-[140px] rounded-lg bg-gradient-to-b md:gradient-to-r from-middark via-middark to-pink/10'>
                        <div className='flex flex-col px-3 gap-1'>
                            <div className='flex w-full justify-between py-2 text-white/50 text-sm'>
                                <div>
                                    Investiment
                                </div>
                                <div><IoMdTrendingUp/></div>
                            </div>
                            <div className='flex w-full items-center justify-between py-4'>
                                <div className='text-white text-3xl font-bold'>
                                    $387,357.00
                                </div>
                                <div>+51%</div>
                            </div>
                            <div className='py-2'>
                                <div className='h-2 w-full bg-white/50 rounded-md'>
                                    <div className='h-2 bg-pink w-[25%] rounded-md'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 md:col-span-2 h-42 rounded-lg bg-gradient-to-b md:gradient-to-r from-middark via-middark to-pink/10'>
                        <div className='flex flex-col px-3 gap-1'>
                        <div className='flex w-full justify-between py-2 text-white/50 text-sm'>
                            <div>
                                Deposit
                            </div>
                            <div><IoMdTrendingUp/></div>
                        </div>
                        <div className='flex w-full items-center justify-between py-4'>
                            <div className='text-white text-3xl font-bold'>
                                $545,700.00
                            </div>
                            <div>+15%</div>
                        </div>
                        <div className='py-2'>
                            <div className='h-2 w-full bg-white/50 rounded-md'>
                                <div className='h-2 bg-pink w-[25%] rounded-md'>
                                </div>
                            </div>
                        </div>
                            </div>
                    </div>
                </div>
            </motion.section>
            <motion.section 
                variants={{
                    hidden:{opacity:0},
                    show:{
                        opacity:1,
                        transition:{
                            staggerChildren: 0.25,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
                className='w-full lg:w-[30%]'>
                <div className='flex flex-col m-4'>
                    <div className='flex w-full justify-between text-md'>
                        <div>My Cards</div>
                        <div><IoEllipsisVertical/></div>
                    </div>
                    <div className='mx-6 my-8'>
                        <div className='w-full px-2 h-48  rounded-md bg-gradient-to-r from-purple/90 via-pink to-purple'>
                            <div className='flex px-2 h-48  rounded-md flex-col justify-center gap-4 w-full bg-gradient-to-r from-pink/40 to-purple/40 rotate-3'>
                                <div className='-rotate-3 gap-4'>
                                    <div>
                                        <div>
                                            Balance
                                        </div>
                                        <div className='text-4xl font-semibold'>
                                            $108.000.00
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between items-center mt-7'>
                                        <div className='flex items-center justify-center text-xl'>
                                            **** **** **** 2564
                                        </div>
                                        <div className='text-3xl'>
                                            <RiMastercardLine/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-between text-md'>
                        <div>Recent Transactions</div>
                        <div><IoEllipsisVertical/></div>
                    </div>
                    <div className='m-6'>
                        <div className='text-white/50 text-sm'>
                            Today
                        </div>
                        <motion.div 
                                variants={{hidden:{opacity:0}, show:{opacity:1}}}
                                className='flex w-full justify-between items-center mt-2 p-2 cursor-pointer rounded-md hover:bg-middark'>
                            <div className='flex items-center gap-2'>
                                <div className='flex w-10 h-10 text-white/50 text-3xl bg-middark rounded-lg items-center justify-center'>
                                    <IoLogoBehance/>
                                </div>
                                <div>
                                    <div className='text-white text-md'>Behance</div>
                                    <div className='text-white/50 text-sm'>12:16Am</div>
                                </div>
                            </div>
                            <div>$1000.00</div>
                        </motion.div>
                        <motion.div 
                                variants={{hidden:{opacity:0}, show:{opacity:1}}}
                                className='flex w-full justify-between items-center mt-2 p-2 cursor-pointer rounded-md hover:bg-middark'>
                            <div className='flex items-center gap-2'>
                                <div className='flex w-10 h-10 text-white/50 text-3xl bg-middark rounded-lg items-center justify-center'>
                                    <FaGithub/>
                                </div>
                                <div>
                                    <div className='text-white text-md'>Git</div>
                                    <div className='text-white/50 text-sm'>1:06Am</div>
                                </div>
                            </div>
                            <div>$10,000.00</div>
                        </motion.div>
                        <motion.div 
                                variants={{hidden:{opacity:0}, show:{opacity:1}}}
                                className='flex w-full justify-between items-center mt-2 p-2 cursor-pointer rounded-md hover:bg-middark'>
                            <div className='flex items-center gap-2'>
                                <div className='flex w-10 h-10 text-white/50 text-3xl bg-middark rounded-lg items-center justify-center'>
                                    <IoLogoIonitron/>
                                </div>
                                <div>
                                    <div className='text-white text-md'>IT Skills Academy</div>
                                    <div className='text-white/50 text-sm'>1:10Pm</div>
                                </div>
                            </div>
                            <div>$100.00</div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    </div>
  );
}

export default Main;
