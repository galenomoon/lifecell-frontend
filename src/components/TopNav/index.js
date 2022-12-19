import React from 'react'

//logo
import logo from '../../assets/logo_lifecell_horizontal.svg'

//styles
import { BsArrowUpShort, BsWhatsapp, BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'

//components
import Contact from '../Contact'

export default function TopNav({ refs, scrollToSection, openModal }) {
  const top_nav_ref = React.useRef()

  return (
    <div ref={top_nav_ref} className='flex md:flex-row sm:flex-col-reverse sm:gap-6 w-full fixed bg-gradient-to-b from-black sm:via-[#00000088] to-transparent z-[1000] items-center justify-between sm:px-[18px] md:px-[64px] py-[22px] uppercase'>
      <img src={logo} className='w-[200px] animate-slide_from_top_md sm:hidden md:block' />
      <div className='flex sm:justify-between md:w-auto sm:w-full md:gap-[44px] animate-slide_from_top_md'>
        <p onClick={() => scrollToSection(refs.second_section)} className='cursor-pointer hover:text-secondary duration-75 md:text-md sm:text-sm select-none'>Feedback</p>
        <p onClick={() => scrollToSection(refs.third_section)} className='cursor-pointer hover:text-secondary duration-75 md:text-md sm:text-sm select-none'>Sobre o Curso</p>
        <p onClick={() => scrollToSection(refs.fourty_section)} className='cursor-pointer hover:text-secondary duration-75 md:text-md sm:text-sm select-none'>Matricule-se</p>
      </div>
      {/* <div className='flex sm:gap-0 md:gap-[44px] md:justify-center md:w-auto sm:justify-between sm:w-full font-bold items-center animate-slide_from_top_md md:bg-transparent sm:bg-[#ffffff22] px-2 py-2 rounded-full'>
        <div onClick={() => openModal()} className='cursor-pointer hover:text-secondary duration-75 px-[22px] py-[8px]'>Entrar</div>
        <button onClick={() => scrollToSection(refs.fourty_section)} className='uppercase hover:bg-[#fff] px-[22px] py-[8px] rounded-full bg-secondary hover:text-secondary duration-75 whitespace-nowrap'>Matricule-se</button>
      </div> */}
      <div className='gap-4 flex flex-col fixed sm:bottom-[10vh] md:top-[40vh] left-0 animate-slide_from_left_md z-[1000]'>
        <Contact link='https://wa.me/+5513988678639' icon={<BsWhatsapp size={30} />} />
        <Contact link='https://www.youtube.com/@lifecell-centrotecnico1599' icon={<BsYoutube size={30} />} />
        <Contact link='https://instagram.com/alex.senag?r=nametag' icon={<BsInstagram size={30} />} />
      </div>
      <button title='Voltar ao topo' onClick={() => refs.first_section?.current?.scrollIntoView({ behavior: 'smooth' })} className='bg-secondary hover:bg-white hover:text-secondary right-8 bottom-10 duration-100 fixed z-[100] rounded-full'>
        <BsArrowUpShort size={50} />
      </button>
    </div>
  )
}
export function TopNavAuthenticated({ }) {

  return (
    <div className='flex w-full fixed bg-gradient-to-b from-black to-transparent z-[1000] items-center justify-between  px-[64px] py-[22px] uppercase'>
      <div className='w-full'>
        <img src={logo} className='w-[200px] animate-slide_from_top_md' />
      </div>
      <div className='flex gap-[44px] animate-slide_from_top_md w-full items-center justify-center'>
        <p onClick={() => { }} className='cursor-pointer hover:text-secondary duration-75'>Aulas</p>
        <p onClick={() => { }} className='cursor-pointer hover:text-secondary duration-75'>Apostila</p>
      </div>
      <div className='flex gap-[44px] w-full justify-end font-bold items-center animate-slide_from_top_md'>
        <FaUserCircle size={40} />
      </div>
    </div>
  )
}
