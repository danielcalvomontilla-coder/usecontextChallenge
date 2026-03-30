import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { MyJob } from '../pages/MyJob';
import Header from '../components/Header';

const RoutesApp = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Router>
         <section className={`App ${theme}`}>
          <div className='container'>
            <Header />           
            <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/profile' element={<Profile />} />
             <Route path='/myjob' element={<MyJob />} />
             </Routes>
          </div>
         </section>
        </Router>

    );
};

export default RoutesApp;