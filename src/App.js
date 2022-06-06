import './App.css';
import Fetch from './components/fetch';
import { Component } from 'react';
import Header from './components/header';
import UpdateComponent from './components/updatecomponent';
import DidUpdate from './components/did_update';
import Unmount from './components/unmount';
import AxiosFetch from './components/axiosFetch';
import './components/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
  return (
    <>
    <Fetch />
    <Header />
    <UpdateComponent />
    <DidUpdate />
    <Unmount />
    <AxiosFetch />
    </>
  );
  }
}

export default App;
