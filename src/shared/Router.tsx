import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import Payment from '../components/Payment/Payment';
import BroadDetail from '../pages/BroadDetail';
import BroadList from '../pages/BroadList';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/broadlist" element={<BroadList />} />
        <Route path="/broadcasts/:id" element={<BroadDetail />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/header" element={<HeaderComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
