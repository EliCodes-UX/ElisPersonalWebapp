import './App.css';
import MainPage from './components/MainPage';

function App() {
  const gifUrl =
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2NsM3NoMGszend3MnBvNW9pbjBoNjF2emF2OWVkd25zdHc4N2M0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RHIKETUlUINYvV7CAO/giphy.gif';

  return (
    <div className='relative'>
      {/* Background container */}
      <div
        className='bg-cover bg-center h-screen fixed top-0 left-0 w-screen z-0'
        style={{
          backgroundImage: `url(${gifUrl})`,
        }}
      ></div>
      {/* Content container */}
      <div className='relative z-10'>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
