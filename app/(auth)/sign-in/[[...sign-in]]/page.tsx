import { SignIn, ClerkLoaded, ClerkLoading, UserProfile } from '@clerk/nextjs'; // Импортирует компоненты для аутентификации из библиотеки Clerk
import { Loader,  Loader2 } from "lucide-react" // импортирует готовые компоненты иконок загрузки из библиотеки licide-react 
import Image from 'next/image';  // Импортирует компонент, используется для добавления изображений в Next.js 

export default function Page() {        // Определяет и экспортирует компонент, который рендерит структуру страницы
  return (
  <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>                
    <div className='h-full lg:flex flex-col items-center justify-center px-4 bg-white'>
        <div className='text-center space-y-4 pt-16 '>
            <h1 className=' font-bold text-3xl text-[#2E2A47]'>
                Welcome to Beam
            </h1>
            <p className='text-base text-[#7E8CA0]'>
             Create account to have acces to your dashboard
            </p>

        </div>
        <div className='flex items-center jusify-center mt-8'>
            <ClerkLoaded>
            <SignIn/>
            </ClerkLoaded>
            <ClerkLoading>
            <Loader2 className='animate-spin
                text-muted-foreground'/>
            </ClerkLoading>
    </div>
    </div>
    <div className='h-full bg-black hidden lg:flex items-center justify-center'>
        <Image src='/logo.svg' height={150} width={150} alt="logo" />
      </div>
  </div>
  )
  
}