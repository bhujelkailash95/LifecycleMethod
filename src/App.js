import logo from './logo.svg';
import './App.css';
import Fetch from './components/fetch';
import { Component } from 'react';
import Header from './components/header';
import UpdateComponent from './components/updatecomponent';
import DidUpdate from './components/did_update';
import { UnknownMethodError } from 'selenium-webdriver/lib/error';
import Unmount from './components/unmount';

class App extends Component{
  render(){
  return (
    <>
    <Fetch />
    <Header />
    <UpdateComponent />
    <DidUpdate />
    <Unmount />
    </>
  );
  }
}

export default App;
