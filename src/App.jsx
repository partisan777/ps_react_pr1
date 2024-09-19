import './App.css';
import MainLayout from './components/mainLayout/MainLayout';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';

function App() {

  return (
    <>
      <MainLayout>
        <Header />
        <MainPage />
      </MainLayout>
    </>
  );
};

export default App;
