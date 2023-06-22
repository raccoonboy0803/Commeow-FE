import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import HeaderComponent from './components/HeaderComponent';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
