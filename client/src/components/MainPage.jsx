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
        <div className='grid grid-cols-3 gap-4 bg-white h-1/3 w-1/2 items-center justify-center'>
          {/* Each square */}
          <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-20 w-20'></div>
          <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-20 w-20'></div>
          <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-20 w-20'></div>
          <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-20 w-20'></div>
          <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-20 w-20'></div>
          <div className='aspect-w-1 aspect-h-1 bg-gray-300 h-20 w-20'></div>
        </div>
      </div>
    </>
  );
}
