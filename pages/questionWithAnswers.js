import React, { Component } from 'react'
import Layout from "./Layout";
import { urlOfImages } from "./images";
import fetch from 'isomorphic-fetch';
import ls from 'local-storage';
import  Router  from 'next/router';
class QueryWithAns extends Component{
    constructor()
    {
        super();
        this.state = {
            question :{},
            answers : [],
            loggedIn : false,
            objId : '',
            form:false,
            quesbox:'',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event) {
        this.setState({ quesbox: event.target.value })
      }
     async componentDidMount() {
         if(ls.get('loggedIn')){
            await this.setState({'loggedIn':true});
        }         
            this.show();
      }
      async upvote(id)
      {
        const url = 'https://questionstack-266907.appspot.com//answers/'+id+'/upvote'
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,
            "Access-Control-Allow-Origin":'*','Authorization':'bearer '+ls.get('token')},
          }
          )
          if (response.ok) {
            const data = await response.json()
            //console.log(.*)$
          //console.log(.*)$
          this.componentDidMount();
          //   await this.setState({
          //       user:data.user
          //   })
          } else {
            alert('unable to fetch')
            
          }
        } catch (error) {
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          )
          throw new Error(error)
        }
        //console.log(.*)$
      }

      async downvote(id)
      {
        const url = 'https://questionstack-266907.appspot.com//answers/'+id+'/downvote'
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,
            "Access-Control-Allow-Origin":'*','Authorization':'bearer '+ls.get('token')},
          }
          )
          if (response.ok) {
            const data = await response.json()
            //console.log(.*)$
          //console.log(.*)$
          this.componentDidMount();
          //   await this.setState({
          //       user:data.user
          //   })
          } else {
            alert('unable to fetch')
            
          }
        } catch (error) {
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          )
          throw new Error(error)
        }
        
        //console.log(.*)$
      }
      async show(){
        await fetch('https://questionstack-266907.appspot.com//questions/'+ls.get('obj_id'))
        .then(response => response.json())
        .then((res)=>{
            //console.log(.*)$
            if(res.question){
            this.setState({question : res.question})
                if(this.state.question.answers){
                    this.setState({answers : this.state.question.answers})
                }}
            this.setState({'objId':ls.get('obj_id')});
            
        })
      }

      async submitanswer(){
        //console.log(.*)$
       
        const url = 'https://questionstack-266907.appspot.com//questions/'+this.state.objId+'/answer';
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
            "Access-Control-Allow-Origin":'*','Authorization':'bearer '+ls.get('token')},
            body: JSON.stringify({ answer:this.state.quesbox})
          }
          )
          if (response.ok) {
            const data = await response.json()
            //console.log(.*)$
          //console.log(.*)$
          this.toggleBox();
          this.componentDidMount();
          //   await this.setState({
          //       user:data.user
          //   })
          } else {
            alert('your Session expired')
            localStorage.setItem('token','');
            localStorage.setItem('loggedIn',false);
            Router.push('/');
            
          }
        } catch (error) {
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          )
          throw new Error(error)
        }
    }
    

      renderAnswer(){
        if(this.state.answers && this.state.answers.length>0){
        return ( <div>{this.state.answers.map((answer)=>{ return(
            <div key={answer._id} className="flex justify-center bg-green-300 p-4 m-4">
        <div className="block md:flex justify-center w-full">
        <div><center>
            <img src={urlOfImages.answer} className="h-6 mt-5"/></center>
        </div>
        
        <div className='p-1 w-auto text-4m md:text-2xl'>
            <span className="ml-2">
           {answer.answer}
           </span>
           <div className="text-right text-gray-500">-- {answer.author.name}</div>
        </div>
        <div className={this.state.loggedIn ? 'block p-6':'hidden p-6'}>
        <button onClick={()=>this.upvote(answer._id)} className="bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4" >Upvote {answer.upvote.length}</button> 
        
        <button onClick={()=>this.downvote(answer._id)} className="bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ">Downvote {answer.downvote.length}</button> 
        </div>
        </div>
        </div>)
        })}</div> );}
        else{
            return (<div className="flex justify-center bg-green-300 p-4 m-4 text-2xl">NO ONE ANSWERED IT YET</div>)
        }
        
      };


      toggleBox(){
        this.setState({
            form : !this.state.form
        })
      }

    render(){
    return(
        <Layout>
           <div className={this.state.form ? 'hidden':'block'}>
            <div className="flex overflow-hidden">
                <div  className={this.state.loggedIn ? 'block':'hidden'}>
                <div className="fixed top-10  left-3 md:relative md:w-1/6 p-6 -ml-6">
                    <div onClick={()=> this.toggleBox()} className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold p-1 px-4 -ml-3 md:py-2 md:px-4 rounded m-1 md:m-4">
                        <span className="w-full"> A</span>
                    </div>
                    </div>
                </div>
            <div className="block text-center  border-gray-600 w-screen w-full">
                <center>
            <div key={this.state.question._id} className="text-2l md:text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600" >
                  <b>Q.</b>   {this.state.question.question}
                  
              </div>
               
                
                <div className="text-2xl bg-green-500 p-8 text-white">
                    Answers
                    {this.renderAnswer()}

                </div>

                </center>
            </div>
            
            </div>
            </div>
            <div className={this.state.form ? 'block':'hidden'}>
                <center>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 border">
 
  <div className='px-4 py-6'>
    <div className="font-bold text-xl mb-2">Write Your Answer Here</div>
    
    <textarea value={this.state.quesbox} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" required placeholder="Enter Your question Here ..." rows="6"/>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>this.submitanswer()}>
  Submit Question
</button>
  </div>
  
</div>
</center></div>
        </Layout>
        
    )
};
}

export default QueryWithAns;