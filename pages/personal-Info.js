import Layout from "./Layout";
import {urlOfImages} from './images';
import { useEffect, Component } from "react";
import ls from 'local-storage'
import Router from "next/router";
import fetch from 'isomorphic-fetch';


class Personal extends Component
{
        constructor(props){
            super(props);
            this.state = {
                user:{}
            };
        }
    async componentDidMount(){
        if(!ls.get('loggedIn'))
        {
            Router.push('/');
        }

        const url = 'https://questionstack-266907.appspot.com/users/info'
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
            //   //console.log(.*)$
              await this.setState({
                  user:data.user
              })
            } else {
              alert('unable to fetch')
              
            }
          } catch (error) {
            console.error(
              'You have an error in your code or there are Network issues.',
              error
            )
          }
       
    }


    renderQuestions(){
        if(!this.state.user.questions){
        return (<></>);}
        else{
            if(this.state.user.questions.length === 0)
            {
                return (<p className="text-4l m-1 bg-red-600 p-3 rounded">Well you are Very Intelligent</p>)
            }

        return ((<>{this.state.user.questions.map((ques)=>{
        return (<p key={ques._id} className="text-4l m-1 bg-red-600 p-3 rounded">Q. {ques.question}</p>)
        })}</>))
        }
    }

    renderAnswers(){
        if(!this.state.user.answers){
        return (<></>);}
        else{
            if(this.state.user.answers.length === 0)
            {
                return (<p className="text-4l m-1 bg-green-600 p-3 rounded">Lets Start Helping Others</p>)
            }

        return (<>{this.state.user.answers.map((ans)=>{
        return (<p key={ans._id} className="text-4l m-1 bg-green-600 p-3 rounded">A. {ans.answer}</p>)
        })}</>)
        }
    }


    render(){
    return (<>
        <Layout>
        <div className="block md:flex justify-center p-4">
            <div className="p-4">
                <img src={urlOfImages.user} className="h-auto rounded-full" alt="Profile Picture"/>
                <div className="flex justify-center mt-5">
                <div>
                    <img src={urlOfImages.copyright} className="mx-2 mt-1 h-8" /></div>
                    <div> <img src={urlOfImages['stack-overflow']} className="h-8"/>
                    </div>
                    <div><p className="font-bold text-4l mb-2 mt-2">QuestionOverflow </p></div>
                </div>
            </div>
            <div className="p-4">
            <div className="max-w-sm rounded border overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-4xl mb-2">{this.state.user.name}</div>
                <div className=" text-2xl mb-2">{this.state.user.username}</div>
                <p className="text-gray-700 text-base mt-5">
                Below Is the list of all the Question you asked and Answered.
                We very much Appreciate your contribution.
                </p>

                <div className="p-2 m-2 bg-red-400 text-white">
                <div className="font-bold text-xl mb-2">Questions Asked</div>
                {this.renderQuestions()}
                </div>

                <div className="p-2 m-2 bg-green-400 text-white">
                <div className="font-bold text-xl mb-2">Questions Answered</div>
                {this.renderAnswers()}
                </div>
                <p>

                </p>
            </div>
           
            </div>
            <div className="flex justify-center m-4">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Edit
                </button>
            </div>
            </div>
        </div>
        </Layout>
        </>
    );

};

}
export default Personal;
