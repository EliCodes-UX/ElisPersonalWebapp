import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <body
      className='bg-cover bg-center h-screen'
      style={{
        backgroundImage:
          "url('https://media1.giphy.com/media/l1Et7Qw1XjvunS0Io/giphy.gif?cid=ecf05e47h986u49iwrnvvfpbrbktvv1wuu5g6cuj0k2y3aw2&ep=v1_gifs_related&rid=giphy.gif&ct=g')",
      }}
    >
      <MainPage />
    </body>
  );
}

export default App;
