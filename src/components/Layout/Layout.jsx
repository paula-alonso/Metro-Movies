import { UserContextProvider } from '../../contexts/UserContext';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
      <main>
        <UserContextProvider>

        <Navbar/>
        

        <section className="body">
            <Outlet/>
        </section>
        <Footer/>
        </UserContextProvider>

      </main>
    );
}