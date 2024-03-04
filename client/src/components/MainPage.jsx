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
        ? 'text-sky-500 font-kode-mono font-bold text-2xl animate-fade-up animate-duration-1000 animate-ease-in'
        : 'hidden'
    );
    setSecondParaClassName(
      showSecondParagraph
        ? 'text-sky-500 font-kode-mono font-bold text-2xl mt-20 mb-20 animate-fade-up animate-duration-1000 animate-ease-in'
        : 'hidden'
    );
    setGridClassName(
      showGrid
        ? 'projectGrid animate-fade-up animate-duration-1000 animate-ease-in'
        : 'hidden'
    );
    setContactClassName(
      showContact
        ? 'text-sky-500 font-kode-mono font-bold text-2xl mt-20 mb-20 animate-fade-up animate-duration-1000 animate-ease-in'
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
      <div className='flex justify-start pl-10 text-amber-300 fixed h-screen items-center'>
        <ul className='flex flex-col text-lg'>
          <li className='sideBarText'>
            <button onClick={handleAboutClick}>About</button>
          </li>
          <li className='sideBarText'>
            <button onClick={handleTechsClick}>Techs</button>
          </li>
          <li className='sideBarText'>
            <button onClick={handleProjectsClick}>Projects</button>
          </li>
          <li className='sideBarText'>
            <button onClick={handleContactClick}>Contact</button>
          </li>
        </ul>
      </div>
      <div className='flex flex-col text-center justify-center h-screen items-center'>
        <div className={firstParaClassName}>
          <p>
            Hey, Im Eli from a suburb of Phoenix, Arizona. <br /> Im currently
            developing my skills as a Software developer
          </p>
        </div>
        <div className={secondParaClassName}>
          <p>
            Technologies that I am able to program with are <br />
            Html, Css, tailwindcss, Javascript, React, Node.js, Express, and
            MongoDB
          </p>
        </div>
        <div className={gridClassName}>
          <div className='flex items-center justify-center h-screen w-screen'>
            <div className='grid grid-cols-3 gap-40 bg-white p-20'>
              <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
              <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
            </div>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center h-screen items-center'>
          <div className={contactClassName}>
            <p>You can contact me and we can build something great</p>
          </div>
        </div>
      </div>
    </>
  );
}
