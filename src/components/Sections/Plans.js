import React from 'react'

//styles
import { MdVerified } from 'react-icons/md'

//components
import PriceCard from '../PriceCard'

export default function Plans({ section_ref }) {

  const prices = [
    {
      title: '3 meses',
      price: 'R$69,99',
      is_per_mouth: true,
      subtitle: 'ou R$199,99 à vista',
      color: 'yellow',
      list: [
        { text: 'Acesso de 3 meses à todas as aulas', enabled: true },
        { text: 'Suporte de 3 meses no Telegram', enabled: true },
        { text: 'Acesso de 3 meses à apostila', enabled: true },
        { text: 'Acesso vitalício à todas as aulas', enabled: false },
        { text: 'Acesso vitalício à apostila', enabled: false },
        { text: 'Suporte de um ano no Telegram', enabled: false },
      ]
    },
    {
      title: '12 meses',
      price: 'R$29,99',
      is_per_mouth: true,
      subtitle: 'ou R$319,99 à vista',
      color: 'green',
      list: [
        { text: 'Acesso de um ano à todas as aulas', enabled: true },
        { text: 'Suporte de 6 meses no Telegram', enabled: true },
        { text: 'Acesso de um ano à apostila', enabled: true },
        { text: 'Acesso vitalício à todas as aulas', enabled: false },
        { text: 'Acesso vitalício à apostila', enabled: false },
        { text: 'Suporte de um ano no Telegram', enabled: false },
      ]
    },
    {
      title: 'Acesso vitalício',
      price: 'R$489,99',
      is_per_mouth: false,
      subtitle: 'pagamento único',
      color: 'blue',
      list: [
        { text: 'Acesso vitalício à todas as aulas', enabled: true },
        { text: 'Suporte de um ano no Telegram', enabled: true },
        { text: 'Acesso de vitalício à apostila', enabled: true }
      ]
    }
  ]

  return (
    <div className='w-full flex flex-col items-center mb-[108px] gap-[40px]'>
      <div className='flex flex-col items-center'>
        <div className='text-[70px] font-bold' ref={section_ref}>
          CURSO COMPLETO <span className='text-secondary animate-shine'>100% ONLINE</span>
        </div>
        <div className='flex gap-2 items-center font-semibold text-[22px]'>
          <MdVerified className='text-secondary animate-shine' />
          <p>AULAS MINISTRADAS POR ALEX SENA</p>
        </div>
      </div>
      <div className='flex w-full justify-center gap-[80px]'>
        {prices.map((plan, index) => <PriceCard plan={plan} index={index} key={index} />)}
      </div>
    </div>
  )
}
