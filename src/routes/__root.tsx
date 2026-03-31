import { Outlet, createRootRoute } from '@tanstack/react-router'
import  Header  from '../components/Header.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className="min-w-screen min-h-screen pl-50 pr-50 pt-10"
    style={{backgroundColor: '#040628'}}>
        <Header />
        <Outlet />
    </div>
    </>
    ),
})


