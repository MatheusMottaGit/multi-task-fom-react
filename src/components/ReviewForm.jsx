import React, { useState } from 'react'

import '../styles/styles.css'

import {FaStar} from 'react-icons/fa'

const ReviewForm = ({data, updateFieldHandler}) => {

  const starColors = {
    isSelected: '#F0F8FF',
    isNotSelected: '#868686'
  }
          const[clickValue, setClickValue] = useState(null | '')

  return (
    <>
        <div className="form-control score-container">
          {
            [...Array(5)].map(((star, index)=>{

                  const ratingValue = index + 1

              return(
                <label className='radio-container'>
                  <input 
                  type="checkbox" 
                  name="rating"
                  onClick={()=>setClickValue(ratingValue)} 
                  value={
                    ratingValue === 1 ? 'Péssima' :
                    ratingValue === 2 ? 'Ruim' :
                    ratingValue === 3 ? 'Regular' :
                    ratingValue === 4 ? 'Boa' :
                    ratingValue === 5 ? 'Excelente' : ''
                  }
                  checked={
                    ratingValue === 1 ? data.rating === 'Péssima' :
                    ratingValue === 2 ? data.rating === 'Ruim' :
                    ratingValue === 3 ? data.rating === 'Regular' :
                    ratingValue === 4 ? data.rating === 'Boa' :
                    ratingValue === 5 ? data.rating === 'Excelente' : ''
                  }
                  onChange={(e)=>updateFieldHandler('rating', e.target.value)}
                  />

                  <FaStar color={ratingValue <= clickValue ? starColors.isSelected : starColors.isNotSelected}/>
                </label>
              )
            }))
          }
        </div>

        <div className="flex flex-col">
          <label>Avalie nossa aplicação:</label>
          <textarea 
          value={data.comment || ''}
          onChange={e => updateFieldHandler('comment', e.target.value)}
          cols="20" 
          rows="5"
          placeholder='Deixe sua avaliação (opcional)...'
          ></textarea>
        </div> 
      </>
  )
}

export default ReviewForm