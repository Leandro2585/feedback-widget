import { CloseButton } from '../close-button'

import { useState } from 'react'
import { FeedbackType, feedbackTypes } from '@main/constants/feedback'
import { FeedbackTypeStep } from './steps/feedback-type-step'
import { FeedbackContentStep } from './steps/feedback-content-step'

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  const handleRestartFeedback = () => setFeedbackType(null)

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      
      {!feedbackType 
        ? <FeedbackTypeStep onFeedbackChanged={setFeedbackType}/>
        : <FeedbackContentStep 
            feedbackType={feedbackType} 
            onFeedbackRestartRequested={handleRestartFeedback}/>
      }
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela <a className='underline underline-offset-2' href='https://rocketseat.com.br'>Rocketseat</a>
      </footer>
    </div>
  )
}