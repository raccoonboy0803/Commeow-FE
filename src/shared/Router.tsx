import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BroadDetail from '../pages/BroadDetail';
import BroadList from '../pages/BroadList';
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
