import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import HeaderComponent from '../components/HeaderComponent';
// import Payment from '../components/Payment/Payment';
import BroadDetail from '../pages/BroadDetail';
import BroadList from '../pages/BroadList';
import Home from '../pages/Home';
// import ModalPortal from './ModalPortal';
import Layout from './Layout';
import SnackBar from './SnackBar';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<BroadList />} />
          <Route path="/broadcasts/:id" element={<BroadDetail />} />
          <Route path="/snack" element={<SnackBar />} />
          {/* <Route path="/broadcasts" element={<BroadDetail />} /> */}
          {/* <Route path="/pay" element={<Payment />} /> */}
          {/* <Route path="/header" element={<HeaderComponent />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
