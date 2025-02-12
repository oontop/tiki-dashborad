
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';


const Root = () => {
  return (
    <div className="dark:bg-slate-700 bg-stone-100 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-screen-2xl mx-auto " style={{width: "100%"}}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
