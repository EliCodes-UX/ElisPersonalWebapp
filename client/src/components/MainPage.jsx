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
        <p className='text-sky-500 font-kode-mono font-bold text-2xl mt-20'>
          Technologies that I am able to program with is <br />
          Html, Css, tailwindcss, Javascript, React, Node.js, Express, and
          MongoDB
        </p>
      </div>
    </>
  );
}
