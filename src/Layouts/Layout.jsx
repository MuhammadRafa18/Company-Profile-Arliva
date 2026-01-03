  import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({children}) => {
  return (
    <div className='bg-white flex flex-col items-center'>
      <Navbar />
      <main className="w-full space-y-24 flex-col items-center  min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};
