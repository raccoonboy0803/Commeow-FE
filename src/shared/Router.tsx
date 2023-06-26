import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import HeaderComponent from '../components/HeaderComponent';
import Payment from '../components/Payment/Payment';
import BroadDetail from '../pages/BroadDetail';
import BroadList from '../pages/BroadList';
import Home from '../pages/Home';
// import ModalPortal from './ModalPortal';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<BroadList />} />
          <Route path="/broadcasts/:id" element={<BroadDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
