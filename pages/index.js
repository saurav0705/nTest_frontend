import '../styles/main.css';
import Link from 'next/link';
import Layout from '../pages/Layout';
import Home from '../pages/home';
import Header from './header';
import Personal from '../pages/personal-Info';
import Query from '../pages/questionspage';


import Router , {useRouter} from 'next/router'
import QueryWithAns from '../pages/questionWithAnswers';
import { Component } from 'react';

const click = () =>{
   
};

export default class Index extends Component{

 

  render(){
    return (
      <>
      
        <Home/>
      
        
        </>
    );
  }

}
