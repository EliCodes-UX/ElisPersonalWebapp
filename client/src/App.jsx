import './App.css';
import MainPage from './components/MainPage';

function App() {
  const gifUrl =
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2NsM3NoMGszend3MnBvNW9pbjBoNjF2emF2OWVkd25zdHc4N2M0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RHIKETUlUINYvV7CAO/giphy.gif';

  return (
    <div
      className='bg-cover bg-center h-screen'
      style={{
        backgroundImage: `url(${gifUrl})`,
      }}
    >
      <MainPage />
    </div>
  );
}

export default App;
