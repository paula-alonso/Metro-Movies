import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
      <main>
        <Navbar/>
        <Footer/>

        <section className="body">
            <Outlet/>
        </section>

      </main>
    );
}