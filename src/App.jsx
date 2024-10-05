import './App.css';
import MainLayout from './components/mainLayout/MainLayout';
import { UserContextProvider } from   '#components/context/UserContext.jsx';

function App() {

  return (
    <>
      <UserContextProvider>
        <MainLayout />
      </UserContextProvider>
    </>
  );
};

export default App;
