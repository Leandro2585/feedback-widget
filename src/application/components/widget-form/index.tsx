import { CloseButton } from '../close-button'

import { useState } from 'react'
import { FeedbackType, feedbackTypes } from '@main/constants/feedback'
import { FeedbackTypeStep } from './steps/feedback-type-step'
import { FeedbackContentStep } from './steps/feedback-content-step'
import { FeedbackSuccessStep } from './steps/feedback-success-step'

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      { feedbackSent ? <FeedbackSuccessStep onFeedbackRestartRequested={() => handleRestartFeedback()}/> : (
        <>
          {!feedbackType 
            ? <FeedbackTypeStep onFeedbackChanged={setFeedbackType}/>
            : <FeedbackContentStep
                onFeedbackSent={() => setFeedbackSent(true)}
                feedbackType={feedbackType} 
                onFeedbackRestartRequested={handleRestartFeedback}/>
          }
        </>
      )}
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela <a className='underline underline-offset-2' href='https://rocketseat.com.br'>Rocketseat</a>
      </footer>
    </div>
  )
}