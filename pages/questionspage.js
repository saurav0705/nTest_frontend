import React, { Component } from 'react'
import Layout from "./Layout";
import { urlOfImages } from "./images";
import fetch from 'isomorphic-fetch';
import  Router  from 'next/router';
import ls from 'local-storage';

class Query extends Component{
    constructor()
    {
        super();
        this.state = {
            questionList :[],
            answers : [],
            questionBox : false,
            quesbox:'',
            query:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event) {
        this.setState({ quesbox: event.target.value })
      }
      async componentDidMount() {
           await fetch('https://questionstack-266907.appspot.com//questions/')
            .then(response => response.json())
            .then((res)=>{
                this.setState( {questionList : [...res.questionList]});
            })
            
      }

      questionDetails(obj)
      {
          localStorage.setItem('obj_id',obj);
          Router.push('/questionWithAnswers');
      }

      renderQuestion(){
          if(!this.state.questionList || this.state.questionList.length===0 )
            {
                return (<><div  className="text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600">
                NOTHING FOUND
                
            </div></>)
            }

          return (<>
              { this.state.questionList.map((question)=>{
                   return <div key={question._id} className="text-4xl bg-red-500 text-white p-8 my-4 mx-4 rounded hover:bg-red-600" onClick={() => this.questionDetails(question._id)}>
                  <b>Q.</b>   {question.question}
                  
              </div>
              })}
          </>
          );

      };

      logIn(){
          return ls.get('loggedIn');
      }

      openQuestionDialog(){
          this.setState({
              questionBox : !this.state.questionBox
          })
      };

      async submitquestion(){
          //console.log(.*)$
          //console.log(.*)$
          const url = 'https://questionstack-266907.appspot.com//questions'
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' ,
              "Access-Control-Allow-Origin":'*','Authorization':'bearer '+ls.get('token')},
              body: JSON.stringify({ question:this.state.quesbox})
            }
            )
            if (response.ok) {
              const data = await response.json()
              //console.log(.*)$
            //console.log(.*)$
            this.openQuestionDialog();
            this.componentDidMount();
            //   await this.setState({
            //       user:data.user
            //   })
            } else {
              alert('Log In to add question')
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
      
      async test(){
          if(ls.get('query') && ls.get('query').length>0){
        //console.log(.*)$
            await fetch('https://questionstack-266907.appspot.com//questions/search/'+ls.get('query'))
             .then(response => response.json())
             .then((res)=>{
                 //console.log(.*)$
                this.setState( {questionList : [...res.questionList]});
                localStorage.setItem('query','');
             })}
             else{
                 return;
             }
             
       
      }

    render(){
        this.test();
    return(
        <Layout>
           <div className={this.state.questionBox ? 'hidden':'block'}>
            <div className="flex overflow-hidden">
                <div className="fixed bottom-3 right-3 md:block  p-4 md:p-8 -ml-2">
                    <div className=" w-full bg-yellow-300 hover:bg-yellow-500 text-white font-bold  mt-10 p-2  rounded " onClick={()=>{this.openQuestionDialog()}}>
                        <span className="text-2l md:text-2xl " > Q</span>
                    </div>
                    
                    
                </div>
                
            <div className="block text-center  border-gray-600 w-screen ">
                
                {this.renderQuestion()}
              </div>
              </div>  
              </div>
            <div className={this.state.questionBox ? 'block':'hidden'}>
                <center>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 border">
 
  <div className='px-4 py-6'>
    <div className="font-bold text-xl mb-2">Write Your Question Here</div>
    
    <textarea value={this.state.quesbox} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" required placeholder="Enter Your question Here ..." rows="6"/>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>this.submitquestion()}>
  Submit Question
</button>
  </div>
  
</div>
</center></div>
        </Layout>
        
    )
};
}

export default Query;