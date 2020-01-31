import Social from '../signupAndLogin/social';
import Layout from '../Layout';
import { Component } from 'react';
import Router from 'next/router'
import ls from 'local-storage';


class SignUp extends Component{

  constructor(props){
    super(props);
    this.state = { username: '', password: '' ,name:''}
    this.handleChange = this.handleChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handledispchange = this.handledispchange.bind(this); 
  }


  handleChange (event) {
    this.setState({ username: event.target.value })
  }
  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }
  handledispchange(event){
    this.setState({name:event.target.value})
  }
  
  componentDidMount(){
    console.log('here is the status ------------ ',ls.get('loggedIn'));
    console.log('here is the token ------------ ',ls.get('token'));
    if(ls.get('loggedIn'))
    {
      Router.push('/');
    }
  }

  async signup()
  {
    console.log(this.state.username+"      "+this.state.password);
    if(this.state.username === '' || this.state.password === '' || this.state.name === '')
    {alert("invalid fields can't be empty")}
    else{
      const url = 'http://localhost:8000/users/signup/'
      console.log(JSON.stringify({ username:this.state.username,password:this.state.password,name:this.state.name }));
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' ,
          "Access-Control-Allow-Origin":'*'},
          body: JSON.stringify({ username:this.state.username,password:this.state.password,name:this.state.name })
        })
        if (response.ok) {
          console.log(response);
          Router.push('/signupAndLogin/login')
        } else {
          alert('signup failed.')
          
        }
      } catch (error) {
        console.error(
          'You have an error in your code or there are Network issues.',
          error
        )
        throw new Error(error)
      }
    }
  }
  render(){
    return(
      <>
      <Layout>
        <div className="flex justify-center">

            <div className="mt-40 m-10 pt-20 hidden md:block ">
                <h1 className="text-4xl">Join The Community</h1>
                <div className="text-4l m-4">Ask A Queation</div>
                <div className="text-4l m-4">Answer A Queation</div>
                <div className="text-4l m-4">Help Out Others</div>
            </div>



            <div>
        <Social />
        <center>
        <div className="mt-5 border w-full max-w-xs">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Display Name
      </label>
      <input value={this.state.name} onChange={this.handledispchange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input value={this.state.username} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" required/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input  value={this.state.password} onChange={this.handlePasswordChange} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required/>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={()=>this.signup()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>
      
    </div>
  </div>
 
</div>
</center>
</div>
</div>
</Layout>
</>
    );
};
}
export default SignUp;