export default function MainPage() {
  return (
    <>
      <div className='flex justify-between items-center sticky top-13 z-10'>
        <div className='flex items-center '>
          <ul>
            <li>about</li>
            <li>technologies</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>discord</li>
            <li>linkedin</li>
            <li>github</li>
            <li>twitter</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex items-center justify-center bg-blue-200 ml-20'>
          <p className='font-permanent-marker text-center text-2xl'>
            Hey, Im Eli from a suburb of Phoenix, Arizona. <br /> Im currently
            developing my skills as a Software developer
          </p>
        </div>
      </div>
    </>
  );
}
