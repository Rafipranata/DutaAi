import { useState } from "react";
import {RequestToGroqAI} from './utils/groq';
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import './App.css';
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";


function App() {

  const [data, setData] = useState("")

  const handleSubmit = async () => {
    const ai = await RequestToGroqAI(content.value);
    setData(ai)
  };

  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto'>
      <h1 className='text-4xl text-white font-bold font-sans'>
        <a href="https://www.instagram.com/duta.code/" target="__blank">Duta Ai</a>
      </h1>
      <form className='flex flex-col gap-4 py-4 w-full'>
      <input type="text" id='content' className="relative w-full py-2 px-4 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block p-2.5 checked:bg-emerald-500" placeholder="Question..." />
        
        <button onClick={handleSubmit} type='button' className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-65 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
          <p className="z-10">Answer</p>
        </button>

      </form>
      
      <div className="max-w-xl w-full mx-auto text-justify rounded ">
        {data ? (
        <SyntaxHighlight language="css" style={darcula} wrapLongLines={true}>
          {data}
        </SyntaxHighlight>
        ) : null}
      </div>

    </main>
  )
}

export default App
