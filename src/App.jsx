import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import './App.css'; // Archivo de estilos CSS

const App = () => {


  return (
    <>
      <ThemeProvider>
        <RoutesApp />
      </ThemeProvider>
    </>
  );
};

export default App;
