import { CloseButton } from '@application/components/close-button'
import { FeedbackType, feedbackTypes } from '@main/constants/feedback'
import { ArrowLeft } from 'phosphor-react'
import { useState } from 'react'
import { ScreenShotButton } from '../screen-shot-button'

type Props = {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export const FeedbackContentStep = ({ feedbackType, onFeedbackRestartRequested }: Props) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenShot] = useState<string | null>(null)
  return (
    <>
    <header>
      <button onClick={onFeedbackRestartRequested} type='button' className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'>
        <ArrowLeft weight='bold' className='w-4 h-4'/>
      </button>
      <span className='text-xl leading-6 flex items-center gap-2'>
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6'/>
        {feedbackTypeInfo.title}
      </span>
      <CloseButton/>
    </header>
    <form className='my-4 w-full'>
      <textarea 
        className='min-w-[304px] w-full min-h[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin' 
        placeholder='Conte com detalhes o que está acontecendo'
      />
      <footer >
        <ScreenShotButton
          onScreenshotTook={setScreenShot}
        />
        <button 
          type='submit'
          className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors'
        >
          Enviar Feedback
        </button>
      </footer>
    </form>
    </>
  )
}