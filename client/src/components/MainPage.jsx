import { useState, useEffect } from 'react';
import EliImage from '../assets/eliPort.jpg';
import twitter from '../assets/icons-twitterx.svg';
import linkedIn from '../assets/icons-linkedin.svg';
import gitHub from '../assets/icon-github-3.svg';
import MernMessages from '../assets/mernMessages.png';
// import JSLibrary from '../assets/javascriptLibrary.png';
import BlogApp from '../assets/blogApp.png';
import Shop from '../assets/shop.png';
// import signup from '../assets/signupPage.png';
import Admin from '../assets/admin.png';
import snakeGame from '../assets/snakeapp.png';
import heartGame from '../assets/heartGame.png';

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
  const [showImage, setShowImage] = useState(false);

  const handleMouseOver = () => {
    setShowImage(true);
    console.log('hovers');
  };

  const handleMouseOut = () => {
    setShowImage(false);
    console.log('left');
  };

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
        }, 400);
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
    <div className='flex flex-grow w-screen'>
      <div className='flex flex-col  pl-3 pr-2 text-amber-300 fixed h-screen items-center bg-gray-600 justify-center'>
        <ul className='flex flex-col text-lg justify-center mb-3s sticky'>
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
      <div className='flex flex-col text-center justify-center relative h-screen right-auto items-center ml-auto mr-auto w-3/4 overflow-hidden pt-3 pb-3'>
        {showImage && (
          <img
            src={EliImage}
            className='h-auto w-auto max-h-72 max-w-72 absolute top-14 rounded-lg'
          />
        )}
        <div className={firstParaClassName}>
          <p className='leading-loose'>
            Hey, Im{' '}
            <span
              className='hover:text-amber-300 hover:cursor-pointer border-b-2 border-gray-300'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Eli B.
            </span>{' '}
            from a suburb of Phoenix, Arizona.
            <br /> Im currently developing my skills as a Software developer
          </p>
        </div>
        <div className={secondParaClassName}>
          <div className='flex flex-col text-center justify-center h-screen items-center'>
            <p className='leading-loose mb-6'>
              Technologies that I am able to program with are <br />
            </p>
            <div className='grid grid-cols-3 gap-3'>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'
                  target='_blank'
                >
                  HTML
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics'
                  target='_blank'
                >
                  CSS
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a href='https://tailwindcss.com/' target='_blank'>
                  Tailwindcss
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Glossary/JavaScript'
                  target='_blank'
                >
                  Javascript
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in '>
                <a href='https://react.dev/' target='_blank'>
                  React
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a href='https://nodejs.org/en/about' target='_blank'>
                  Node.js
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a href='https://expressjs.com/' target='_blank'>
                  Express
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a href='https://git-scm.com/' target='_blank'>
                  Git
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in'>
                <a href='https://www.linux.com/what-is-linux/' target='_blank'>
                  Linux
                </a>
              </div>
              <div className='techDivs hover:animate-jump animate-once animate-duration-1000 animate-ease-in col-end-2'>
                <a href='https://www.mongodb.com/' target='_blank'>
                  MongoDB
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={gridClassName}>
          <div className='flex flex-col flex-grow items-center justify-center h-half w-half mt-20 mb-20 pb-3 pt-3'>
            <h1 className='text-gray-200 text-3xl font-kode-mono font-bold mb-3 mt-4'>
              Projects
            </h1>
            <div className='grid grid-cols-3 gap-2 bg-gray-600 p-4 w-auto h-auto rounded-lg shadow-lg shadow-gray-500'>
              <div className='projectDivs'>
                <a href='https://mernmessaging.netlify.app/' target='_blank'>
                  <div>
                    <h2 className='font-kode-mono'>MernMessaging</h2>
                    <img src={MernMessages} />
                  </div>
                  <p className='m-3'>created a small messenging app clone.</p>
                </a>
              </div>
              <div className='projectDivs'>
                <a
                  href='https://elicodes-ux.github.io/snakeGame/'
                  target='_blank'
                >
                  <div>
                    <h2 className='font-kode-mono'>JavascriptLibrary</h2>
                    <img className='mt-1' src={snakeGame} />
                    <p className='mt-3'>
                      created a small yet fun game of snake.
                    </p>
                  </div>
                </a>
              </div>
              <div className='projectDivs'>
                <a href='https://elis-mern-blog.netlify.app/' target='_blank'>
                  <h2 className='font-kode-mono'>BlogApp</h2>
                  <img src={BlogApp} />
                  <p className='mt-2'>
                    created a simple blog app to put your ideas on the web.
                  </p>
                </a>
              </div>
              <div className='projectDivs'>
                <a href='https://topshoppingcart.netlify.app/' target='_blank'>
                  <h2 className='mb-4 font-kode-mono'>ShoppingCart</h2>
                  <img src={Shop} />
                  <p className='mt-3'>created a frontend only shopping cart.</p>
                </a>
              </div>
              <div className='projectDivs'>
                <a
                  href='https://elicodes-ux.github.io/TOP-Signup/'
                  target='_blank'
                >
                  <h2 className='mb-3 font-kode-mono'>SignupPage</h2>
                  <img src={heartGame} />
                  <p>created a mock wheres waldo game but with snails.</p>
                </a>
              </div>
              <div className='projectDivs'>
                <a href='https://elicodes-ux.github.io/admin/' target='_blank'>
                  <h2 className='mb-3'>AdminPage</h2>
                  <img src={Admin} />
                  <p>created a mock admin page for users.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={contactClassName}>
          <div className='flex flex-col text-center justify-center h-screen items-center'>
            <p className='leading-loose'>
              connect with me at{' '}
              <a
                className='hover:text-amber-300 hover:cursor-pointer border-b-2 border-gray-300'
                href='mailto:Eli.bonner@outlook.com'
              >
                Eli.bonner@outlook.com
              </a>{' '}
              <br /> and we can build something great!!
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pr-4 absolute right-0 top-1/4 text-gray-600'>
        <ul className='flex flex-col justify-center items-center'>
          <li className='sideBarText'>
            <a href='https://twitter.com/EliNotElijah1' target='_blank'>
              <img src={twitter} />
            </a>
          </li>
          {/* <li className='sideBarText'>
            <a>
              <img src={discord} />
            </a>
          </li> */}
          <li className='sideBarText'>
            <a
              href='https://www.linkedin.com/in/eli-bonner-b0a0172b8'
              target='_blank'
            >
              <img src={linkedIn} />
            </a>
          </li>
          <li className='sideBarText'>
            <a href='https://github.com/EliCodes-UX' target='_blank'>
              <img src={gitHub} className='h-16 w-16' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
