import { Outlet, createRootRoute } from '@tanstack/react-router'
import  Header  from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className="min-w-screen min-h-screen p-5 lg:pr-10 lg:pl-10 lg:pt-8 xl:pr-20 xl:pl-20 xl:pt-10"
    style={{backgroundColor: '#040628'}}>
        <Header />
        <Outlet />
        <Footer />
    </div>
    </>
    ),
})


