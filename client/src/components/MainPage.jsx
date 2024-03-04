import { useState, useEffect } from 'react';

export default function MainPage() {
  const [showFirstParagraph, setShowFirstParagraph] = useState(true);
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
          } else if (deltaY < 0 && showGrid) {
            setShowGrid(false);
            setShowSecondParagraph(true);
          } else if (deltaY < 0 && showSecondParagraph) {
            setShowSecondParagraph(false);
            setShowFirstParagraph(true);
          }

          setScrolling(false);
        }, 800);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [showFirstParagraph, showSecondParagraph, showGrid, scrolling]);

  return (
    <>
      <div className='flex justify-start pl-10 text-amber-300 fixed h-screen items-center'>
        <ul className='flex flex-col text-lg'>
          <li className='sideBarText'>about</li>
          <li className='sideBarText'>techs</li>
          <li className='sideBarText'>projects</li>
          <li className='sideBarText'>contact</li>
        </ul>
      </div>
      <div className='flex flex-col text-center justify-center h-screen items-center'>
        {showFirstParagraph && (
          <div className=' text-sky-500 font-kode-mono font-bold text-2xl'>
            <p className='animate-fade-up animate-ease-in'>
              Hey, Im Eli from a suburb of Phoenix, Arizona. <br /> Im currently
              developing my skills as a Software developer
            </p>
          </div>
        )}
        {showSecondParagraph && (
          <div className='animate-fade-up animate-ease-in'>
            <p className='text-sky-500 font-kode-mono font-bold text-2xl mt-20 mb-20'>
              Technologies that I am able to program with are <br />
              Html, Css, tailwindcss, Javascript, React, Node.js, Express, and
              MongoDB
            </p>
          </div>
        )}
        {showGrid && (
          <div className='animate-fade-up animate-ease-in'>
            <div className='flex items-center justify-center h-screen w-screen'>
              {/* Grid container */}
              <div className='grid grid-cols-3 gap-40 bg-white p-20'>
                {/* Each square */}
                <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
                <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
                <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
                <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
                <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
                <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-40 w-40'></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
