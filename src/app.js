import React from 'react';

// import ToDo from './components/todo/todo.js';
import SettingProvider from './context/settings/context';
import LoginContext from './context/auth/context';
import Routes from './components/router';
import Login from './context/auth/login';
import Header from './components/header/header';
import Footer from './components/footer/footer';

export default function App() {
    return (
      
      <>
      <LoginContext>
      <SettingProvider>
      <Header />
      <Routes />
      <Login />
      <Footer />
      </SettingProvider>
      </LoginContext>
      </>
    );
}
