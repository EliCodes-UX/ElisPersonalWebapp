export default function MainPage() {
  return (
    <>
      <div className='flex text-amber-300'>
        <ul>
          <li>about</li>
          <li>techs</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>
      <div className='flex flex-col text-center justify-center h-screen items-center'>
        <p className='text-sky-500 font-kode-mono font-bold text-2xl'>
          Hey, Im Eli from a suburb of Phoenix, Arizona. <br /> Im currently
          developing my skills as a Software developer
        </p>
        <p className='text-sky-500 font-kode-mono font-bold text-2xl mt-20 mb-20'>
          Technologies that I am able to program with is <br />
          Html, Css, tailwindcss, Javascript, React, Node.js, Express, and
          MongoDB
        </p>
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
    </>
  );
}
