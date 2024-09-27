
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router'

export default function Home() {
  const navigate = useNavigate();
  function handleClick()
  {
    navigate('/chat');
  }
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Chat with AI</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Chat with this AI model. Have fun with it
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <button
                onClick={handleClick}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Learn About some of the history topics.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Feel free to ask your academic as well as general doubts. 
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
    </div>
  )
}
