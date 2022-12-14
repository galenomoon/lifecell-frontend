import React from 'react'

//components
import FeedbackCard from '../FeedbackCard'

export default function Feedbacks({ section_ref }) {

  const comments = [
    {
      name: 'Kaique Lima',
      comment: 'Ótimo lugar de aprendizagem, o que é prometido na venda do curso é cumprido.Ótimos professores, extremamente educados e atenciosos.A assistência durante o tempo de curso e após são fora de série, super recomendo! E para quem não tem nenhum tipo de conhecimento na área, garanto que você vai sair sabendo uma profissão. LifeCell muito obrigado por essa oportunidade de aprendizado!',
    },
    {
      name: 'Leandro Oliveira',
      comment: 'Escola e professor de excelente qualidade muito obrigado pelo ensinamento top de mais, nunca tive vontade de mexer em celular devido as pecas serem pequenas mais depois do curso vi que é maravilhoso trabalhar nesse ramo. Obrigado mesmo Alex. Que Deus te ilumine cada dia mais e que entrem novos alunos. indicarei a todos que precisarem.',
    },
    {
      name: 'Joana Andrade',
      comment: 'Eu super recomendo o curso. O professor ensina maravilhosamente bem. O ambiente é ótimo e a educação e o acolhimento é nota 1000. Temos tudo que precisamos para aprender.Laboratório completo e suporte aos alunos é maravilhoso.Realmente aprendemos o que eles prometem!!!! Meus parabéns.Se tivesse mais estrelas eu daria mais',
    }
  ]

  return (
    <div className='w-full flex flex-col items-center gap-[40px] z-[200]' ref={section_ref}>
      <div className='md:text-[60px] sm:text-[40px] text-center font-bold w-[80%] gap-2 md:leading-[70px] sm:leading-[50px]'>
        Veja o que <span className='text-secondary animate-shine'>dizem</span> alguns dos novos
        profissionais <span className='text-secondary animate-shine'>formados</span> pela gente
      </div>
      <div className='bg-[#000] flex md:flex-row sm:flex-col items-center justify-center gap-[80px] px-[100px] bg-opacity-70 w-full py-10'>
        {comments.map((comment, index) => <FeedbackCard comment={comment} key={index} />)}
      </div>
    </div>
  )
}
