import React from 'react'

const ThanksForm = ({data}) => {
  return (
      <>
        <div className="flex items-center justify-center flex-col text-center">
          <span>Quase lá...</span>
            <p className='w-full m-6 text-zinc-500'>Sua opinião é importante para continuarmos construindo nossos projetos, e divulgando para todos!</p>
              <h2>Aqui está o resumo da sua avaliação, {data.name}:</h2>
                <div className='flex flex-col items-center justify-center mt-4'>
                  <p>Avaliação: {data.rating}</p>
                  <p>Comentário: {data.comment}</p>
                </div>
        </div>
      </>
  )
}

export default ThanksForm