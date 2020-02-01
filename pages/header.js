import Link from 'next/link';
import Layout from '../pages/Layout';
import { Component } from 'react';
import ls from 'local-storage';
import { urlOfImages } from '../public/icons/assets/images';
import  Router  from 'next/router';

class Header extends Component
{
    constructor(props){
        super(props);
        this.state = {
            loggedIn:false,
            Search : false,
            SearchInput : '',
            ham: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event) {
        this.setState({ SearchInput : event.target.value })
      }
    async componentDidMount(){
        await this.setState({'loggedIn':ls.get('loggedIn')});
        //console.log(.*)$
        //console.log(.*)$
    }

    async logout()
    {
        await localStorage.setItem('loggedIn','false');
        await localStorage.setItem('token','none');
        await this.setState({'loggedIn':ls.get('loggedIn')});
        Router.push('/');
        //console.log(.*)$
    }

    profile()
    {
        Router.push('/personal-Info');
    }

    toggleSearch(){
        this.setState({
            Search: !this.state.Search
        })
    }

    search()
    {
        var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
        //console.log(.*)$
        this.toggleSearch();
        localStorage.setItem('query',this.state.SearchInput);
        Router.push('/questionspage');
    } 
    }
    toggleHam(){
        this.setState({
            ham: !this.state.ham
        })
    }
    render(){
    return (
        
    <header className="bg-gray-100 text-gray-800 px-1 md:px-4  sticky top-0 z-2">
    <div className="py-4 flex whitespace-no-wrap justify-around">
    <div className="flex">
    <button type="button" className="block  text-white-500  focus:text-gray focus:outline-none" onClick={()=>{this.toggleHam()}}>
        <svg className="h-6 w-6 fill-current -mt-2 md:-mt-4" viewBox="0 0 24 24">
          <path className={this.state.ham ? 'hidden':'block'} fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          <path className={this.state.ham ? 'block':'hidden'}  d="M23.302,16.628l-5.395-5.415l5.407-5.345c0.222-0.222,0.222-0.584,0-0.806l-1.538-1.546
								c-0.106-0.107-0.251-0.165-0.403-0.165s-0.295,0.062-0.402,0.165l-5.382,5.328l-5.39-5.325c-0.107-0.106-0.251-0.165-0.403-0.165
								c-0.152,0-0.296,0.062-0.403,0.165L7.858,5.066c-0.222,0.222-0.222,0.584,0,0.806l5.407,5.346l-5.391,5.41
								c-0.107,0.107-0.168,0.251-0.168,0.403s0.057,0.296,0.168,0.403l1.538,1.546c0.111,0.11,0.255,0.168,0.403,0.168
								c0.144,0,0.292-0.054,0.403-0.168l5.37-5.396l5.374,5.391c0.111,0.111,0.255,0.169,0.402,0.169c0.145,0,0.293-0.054,0.402-0.169
								l1.539-1.546c0.106-0.106,0.168-0.25,0.168-0.402C23.471,16.879,23.408,16.735,23.302,16.628z"/>
        </svg>
      </button>
      <div className={this.state.ham ? 'block':'hidden'}>

        <div className="p-2 z-1 mt-6 px-8  absolute bg-yellow-400 text-white rounded">
        <Link href='/'><a className="block">Home</a></Link>
        <Link href='/questionspage'><a className="block">All Questions</a></Link>
    </div>
      </div>
        <div className="flex">
        <Link href="/">
            <div className="flex">
          <img className="block h-6" src="data:image/png;base64,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"/>    
          <h4 className="hidden md:block">QuestionOverflow</h4>
          </div>
          </Link>
          
    </div>
        </div>
    <div >
        <button type="button" className="block bg-orange-500  rounded-full text-white px-4  hover:text-white focus:text-white focus:outline-none">
            Products
        </button>
        <div className="block bg-white-500 p-2 z-1 px-8 absolute bg-yellow-400 hidden">
        <a className="block">link1</a>
        <a className="block">link1</a>
        <a className="block">link1</a>
        <a className="block">link1</a>
    </div>
    </div>
    <div>
    <button type="button" className="hidden md:block  rounded-full px-4 hover:text-white hover:bg-gray-500 focus:text-white focus:outline-none">
            Customers
        </button>
        
    </div>
    <div className="">
    <button type="button" className="hidden md:block  rounded-full px-2 hover:bg-gray-500  hover:text-white focus:text-white focus:outline-none">
            Use Cases
        </button>
    </div>
    <div>
    <input value={this.state.SearchInput} onKeyPress={()=>this.search()} onChange={this.handleChange} className="w-5/6 hidden md:block bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  w-full appearance-none leading-normal" type="text" placeholder="Search" />
    <img onClick={()=>this.toggleSearch()} src="data:image/png;base64,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" className="h-6 block md:hidden"/>
    <div>
        <div className={this.state.Search ? 'block':'hidden'}>
    <input value={this.state.SearchInput} onKeyPress={()=>this.search()} onChange={this.handleChange} className=" w-screen z-1 px-8 absolute left-0 top-10 mt-5 border-3 block md:hidden bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  w-full appearance-none leading-normal" type="text" placeholder="Search" />
    </div>
    </div>
    </div>
    <div className={this.state.loggedIn ? 'hidden':'flex'}>
    <div>
        <Link href='/signupAndLogin/login'>
        <button className="text-xs md:text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log In</button>
        </Link>
    </div>
    <div className="ml-1">
        <Link href="/signupAndLogin/signup">
        <button className="text-xs md:text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </Link>
    </div>
    </div>
    <div className={this.state.loggedIn ? 'flex':'hidden'}>
        <div>
        <img className="block h-8 mr-1 md:mt-2 rounded-full" src={urlOfImages.user} onClick={()=>{this.profile()}}/>    
        </div>
        <div className="ml-1">
        <button className="text-xs md:text-xl bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={()=>{this.logout()}}>Log Out</button>
        </div>
    </div>
    </div>
   
  </header>
  );
};
}
export default Header;