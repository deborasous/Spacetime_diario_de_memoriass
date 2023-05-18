import {User} from 'lucide-react'
import Image from 'next/image'
import Logo from '../assets/logo-spacetimes.svg'


export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between px-20 py-16  overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2  rounded-full bg-purple-700 opacity-50 blur-full">
        </div>

        {/* stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

        {/* sign in */}
        <a href="#" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
            <User className='h-5 w-5 text-gray-500'/>
          </div>

          <p className='text-sm leading-snug max-w-[140px] hover:text-gray-50'>
            <span className='underline'>Crie sua conta </span>
            e salve suas memórias!
          </p>
        </a>

        {/* hero */}
        <div className='space-y-5'>
          <Image src={Logo} alt="Logo da NLW Spacetime" />

          <div className='max-w-[420px] space-y-1'> 
            <h1 className='font-bold text-5xl leading-tight text-gray-50'>Sua cápsula do tempo</h1>
            <p className='text-lg leading-relaxed'> Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>

          <a href="" className='inline-block bg-green-500 rounded-full font-alt font-bold text-sm uppercase leading-none text-gray-900 py-3 px-5 hover:bg-green-600'>
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* message */}
        <div>
          <p>Feito com 💜 no NLW da 
            <a href="https://www.rocketseat.com.brs" target='_blank' rel='noreferrer' className='underline hover:text-gray-50'>
              Rocketseat
            </a>
          </p>
        </div>
      </div>

      {/* rigth */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou nenhuma lembrança, comece a {" "}
            <a href="" className="underline hover:text-gray-50">criar agora</a>!
          </p>
        </div>
      </div>
    </main>
  );
}
