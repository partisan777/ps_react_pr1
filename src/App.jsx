import './App.css';
import MainLayout from './components/mainLayout/MainLayout';
import { UserContextProvider } from   '#components/context/user.context.jsx';

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
