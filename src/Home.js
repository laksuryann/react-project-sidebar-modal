import React,{useContext} from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext,AppProvider,AppContext } from './context';

const Home = () => {
  
  const contextStore= useGlobalContext
  console.log(contextStore)
  const { openSidebar, openModal } = contextStore;

  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;
