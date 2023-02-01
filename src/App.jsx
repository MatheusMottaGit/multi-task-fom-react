import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import ThanksForm from './components/ThanksForm'

import {BiUser, BiMailSend, BiX} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'

import './styles/styles.css'

import {useForm} from './hooks/useForm'
import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

const App = () => {

  function updateFieldHandler(key, value){
    setData((previousState)=>{
      return {... previousState, [key]: value }
    })
  }

  const formTemplate = {
    name: '',
    email: '', 
    rating: '',
    comment: ''
  }

  const [data, setData] = useState(formTemplate)

      const formComponents = [
        <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
        <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
        <ThanksForm data={data}/>
      ]

        const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
      <div className='h-screen w-screen bg-zinc-900 flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center mb-16'>

              <BiUser color='grey' size={20}/>

            {
              currentStep >= 1 ? <div className="w-32 m-2 h-[1px] bg-zinc-400 transition ease-in-out delay-170"></div> : <div className="w-32 m-2 h-[1px] bg-zinc-700 transition ease-in-out delay-170"></div>
            }
              {
                currentStep >= 1 ? <AiOutlineStar color='grey' size={20} /> : <AiOutlineStar color='lightgrey' size={20} />
              }
            {
              currentStep >= 2 ? <div className="w-32 m-2 h-[1px] bg-zinc-400 transition ease-in-out delay-170"></div> : <div className="w-32 m-2 h-[1px] bg-zinc-700 transition ease-in-out delay-170"></div>
            }
              {
                currentStep >= 2 ? <BiMailSend color='grey' size={20}/> : <BiMailSend color='lightgrey' size={20}/>
              }

            </div>
        <div className="h-80 w-2/6 m-12 flex items-center justify-center rounded-lg">
          <form  className='bg-bgForm h-[500px] transition ease-in-out delay-100' onSubmit={(event)=>changeStep(currentStep + 1, event)}>           
            <div className='h-[300px]'>
            {
              currentComponent
            }
            </div>

            <div className='flex'>
              {
                !isFirstStep && 
                  <button 
                    type='button'
                    className='bg-bgButtons text-buttonLetterColor font-bold'
                    onClick={()=>changeStep(currentStep - 1)}>
                    VOLTAR
                  </button>
              }
              {
                !isLastStep ? (
                  <button type='submit' className='bg-bgButtons text-buttonLetterColor font-bold'>
                    SEGUIR
                  </button>
                ) : (

                  <Dialog.Root>
                    <Dialog.Trigger>
                      <button 
                        type='reset' 
                        className='bg-bgButtons text-buttonLetterColor font-bold -mt-16 -ml-1'
                        onClick={()=>setData('')}
                        >
                          ENVIAR
                      </button>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                      <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>

                      <Dialog.Content className='absolute flex flex-col items-center justify-center p-10 bg-bgForm rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        
                        <Dialog.Close className='absolute -right-36 top-1 text-zinc-400 hover:text-zinc-200'>
                          <BiX size={24}/>
                        </Dialog.Close>

                        <Dialog.Title className='text-1xl leading-tight font-normal mb-6 text-center'>
                          Certeza de que deseja enviar as informações dadas?
                        </Dialog.Title>

                        <Dialog.Close>
                          <button 
                            className='bg-bgButtons text-bgForm font-bold -right-10'
                            id='btn-submit'
                            onClick={()=>{
                              setData('')
                              changeStep(0)
                            }}
                            >
                            Enviar
                          </button>
                        </Dialog.Close>

                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                )
              }
            </div>
          </form>
        </div>
      </div>
  )
}

export default App
