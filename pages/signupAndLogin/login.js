import Social from '../signupAndLogin/social';
import Layout from '../Layout';
import { render } from 'react-dom';
import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import  Router  from 'next/router';



class LogIn extends Component
{
  
  constructor(props){
    super(props);
    this.state = { username: '', password: ''  }
    this.handleChange = this.handleChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    
  }
  
  

  handleChange (event) {
    this.setState({ username: event.target.value })
  }
  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }
  

  async login()
  {
    console.log(this.state.username+"      "+this.state.password);
    if(this.state.username === '' || this.state.password === '')
    {alert("invalid fields can't be empty")}
    else{
      const url = 'http://localhost:8000/users/login/'
      console.log(JSON.stringify({ username:this.state.username,password:this.state.password }));
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' ,
          "Access-Control-Allow-Origin":'*'},
          body: JSON.stringify({ username:this.state.username,password:this.state.password })
        }
        )
        if (response.ok) {
          const { token } = await response.json()
          localStorage.setItem('loggedIn','true');
          localStorage.setItem('token',token);
          console.log(token);
          console.log(response);
          Router.push('/questionspage');
        } else {
          alert('Login failed.')
          
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

                return (<>
                      <Layout>
                        <div>
                        <Social />
                        <center>
                        <div className="mt-5 border w-full max-w-xs">
                  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                      </label>
                      <input value={this.state.username} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" name="username" required/>
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                      </label>
                      <input  value={this.state.password} onChange={this.handlePasswordChange} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required/>
                    </div>
                    <div className="flex items-center justify-between">
                      <button type="submit" onClick={()=>{this.login()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Log In
                        {/* {(this.state.loggedIn ? <></>:<div>failed</div>)} */}
                      </button>
                      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                      </a>
                    </div>
                    </form>
                  </div>
                  
                </div>
                </center>
                </div>
                </Layout>
                </>
                );
            };
}
export default LogIn;