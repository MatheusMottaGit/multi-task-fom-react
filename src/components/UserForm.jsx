import '../styles/styles.css'

import {FiLogIn} from 'react-icons/fi'
import {MdOutlineMail} from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'

const UserForm = ({data, updateFieldHandler}) => {
  return (
      <>
        <div className="flex items-start justify-start flex-col">
          <span className='flex text-2xl'>
            <FiLogIn size={24} className='text-bgButtons m-1 ml-3' />
            Faça seu login
          </span>
          <p className='ml-6'>Entre com suas informações de cadastro</p>
        </div>

        <div className="flex flex-col m-6">
          <label>Nome:</label>
          <input
          // required
          type="text" 
          placeholder='Digite seu nome...'
          value={data.name || ''}
          onChange={e => updateFieldHandler('name', e.target.value)}
          />
        </div>

        <div className="flex flex-col m-6">
          <label>E-mail:</label>
          <input
          // required 
          type="email"
          placeholder='Digite seu e-mail...' 
          value={data.email || ''}
          onChange={e => updateFieldHandler('email', e.target.value)}
          />
        </div> 
      </>
  )
}

export default UserForm