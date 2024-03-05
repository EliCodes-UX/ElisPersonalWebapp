import { useState, useEffect } from 'react';

export default function MainPage() {
  const [showFirstParagraph, setShowFirstParagraph] = useState(true);
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [firstParaClassName, setFirstParaClassName] = useState('');
  const [secondParaClassName, setSecondParaClassName] = useState('');
  const [gridClassName, setGridClassName] = useState('');
  const [contactClassName, setContactClassName] = useState('');

  useEffect(() => {
    const handleScroll = event => {
      if (!scrolling) {
        setScrolling(true);

        setTimeout(() => {
          const deltaY = event.deltaY;

          if (deltaY > 0 && showFirstParagraph) {
            setShowFirstParagraph(false);
            setShowSecondParagraph(true);
          } else if (deltaY > 0 && showSecondParagraph) {
            setShowSecondParagraph(false);
            setShowGrid(true);
          } else if (deltaY > 0 && showGrid) {
            setShowGrid(false);
            setShowContact(true);
          } else if (deltaY < 0 && showContact) {
            setShowContact(false);
            setShowGrid(true);
          } else if (deltaY < 0 && showGrid) {
            setShowGrid(false);
            setShowSecondParagraph(true);
          } else if (deltaY < 0 && showSecondParagraph) {
            setShowSecondParagraph(false);
            setShowFirstParagraph(true);
          }

          setScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [
    showFirstParagraph,
    showSecondParagraph,
    showGrid,
    showContact,
    scrolling,
  ]);

  useEffect(() => {
    setFirstParaClassName(
      showFirstParagraph
        ? 'text-gray-200 font-kode-mono font-bold text-2xl mt-20 mb-20 animate-fade-up animate-duration-1000 animate-ease-in'
        : 'hidden'
    );
    setSecondParaClassName(
      showSecondParagraph
        ? 'text-gray-200 font-kode-mono font-bold text-2xl mt-20 mb-20 animate-fade-up animate-duration-1000 animate-ease-in'
        : 'hidden'
    );
    setGridClassName(
      showGrid
        ? 'projectGrid animate-fade-up animate-duration-1000 animate-ease-in'
        : 'hidden'
    );
    setContactClassName(
      showContact
        ? 'text-gray-200 font-kode-mono font-bold text-2xl mt-20 mb-20 animate-fade-up animate-duration-1000 animate-ease-in'
        : 'hidden'
    );
  }, [showFirstParagraph, showSecondParagraph, showGrid, showContact]);

  const handleAboutClick = () => {
    setShowFirstParagraph(true);
    setShowSecondParagraph(false);
    setShowGrid(false);
    setShowContact(false);
  };

  const handleTechsClick = () => {
    setShowFirstParagraph(false);
    setShowSecondParagraph(true);
    setShowGrid(false);
    setShowContact(false);
  };

  const handleProjectsClick = () => {
    setShowFirstParagraph(false);
    setShowSecondParagraph(false);
    setShowGrid(true);
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowFirstParagraph(false);
    setShowSecondParagraph(false);
    setShowGrid(false);
    setShowContact(true);
  };

  return (
    <>
      <div className='flex flex-col justify-between pl-2 pr-2 text-amber-300 fixed h-screen items-center bg-gray-600'>
        <div className='bg-black rounded-full h-10 w-10 mt-4'></div>
        <ul className='flex flex-col text-lg justify-center mb-80'>
          <li className='sideBarText'>
            <button
              onClick={handleAboutClick}
              className='hover:animate-jump animate-once animate-duration-[800ms]'
            >
              About
            </button>
          </li>
          <li className='sideBarText'>
            <button
              onClick={handleTechsClick}
              className='hover:animate-jump animate-once animate-duration-[800ms]'
            >
              Techs
            </button>
          </li>
          <li className='sideBarText'>
            <button
              onClick={handleProjectsClick}
              className='hover:animate-jump animate-once animate-duration-[800ms]'
            >
              Projects
            </button>
          </li>
          <li className='sideBarText'>
            <button
              onClick={handleContactClick}
              className='hover:animate-jump animate-once animate-duration-[800ms]'
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div className='flex flex-col text-center justify-center h-screen items-center'>
        <div className={firstParaClassName}>
          <p className='leading-loose'>
            Hey, Im Eli from a suburb of Phoenix, Arizona.
            <br /> Im currently developing my skills as a Software developer
          </p>
        </div>
        <div className={secondParaClassName}>
          <div className='flex flex-col text-center justify-center h-screen items-center'>
            <p className='leading-loose'>
              Technologies that I am able to program with are <br />
              Html, Css, tailwindcss, Javascript, React, Node.js, Express, and
              MongoDB
            </p>
          </div>
        </div>
        <div className={gridClassName}>
          <div className='flex flex-col items-center justify-center h-half w-half'>
            <h1 className='text-gray-200 text-3xl font-kode-mono font-bold mb-4'>
              Projects
            </h1>
            <div className='grid grid-cols-3 gap-10 bg-gray-200 p-16 rounded-lg shadow-lg shadow-gray-200'>
              <div className='aspect-w-1 aspect-h-1 bg-gray-200 h-60 w-60 rounded-lg'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-200 h-60 w-60 rounded-lg'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-200 h-60 w-60 rounded-lg'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-200 h-60 w-60 rounded-lg'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-200 h-60 w-60 rounded-lg'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-200 h-60 w-60 rounded-lg'></div>
            </div>
          </div>
        </div>
        <div className={contactClassName}>
          <div className='flex flex-col text-center justify-center h-screen items-center'>
            <p className='leading-loose'>
              You can contact me and we can build something great
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
