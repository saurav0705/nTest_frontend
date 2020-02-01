const Options = () => {

    return (
        <div className="block md:flex justify-center text-center mt-20">
            <div className="max-w-sm  rounded overflow-hidden border shadow-lg m-4 h-auto p-4">
                
                <img className="w-full  object-cover p-5" align="middle" src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"/>
                <div className="text-xl">Public Q&A
                    </div>
                    <div className="text-3l  p-4">Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.
                        </div>
                        <button className="bg-blue-800 m-2  text-white font-bold py-2 px-4 rounded">
                        Browse Questions
                        </button>
            </div>
            <div className="max-w-sm rounded overflow-hidden m-4 md:-mt-4  md:mb-8 border shadow-lg m-4 h-auto p-4">
                
            <img className="w-full  object-cover p-5" align="middle" src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"/>
                <div className="text-xl ">Private Q&A
                    </div>
                    <div className="text-3l p-4">Level up with Question Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
                        </div>
                        <button className="bg-orange-500 m-2  text-white font-bold py-2 px-4 rounded">
                        Try For Free
                        </button>
            </div>
            <div className="max-w-sm rounded overflow-hidden border shadow-lg m-4 h-auto p-4">
                
            <img className="w-full  object-cover p-5" align="middle" src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"/>
                <div className="text-xl ">Browse Jobs
                    </div>
                    <div className="text-3l p-4">Find the right job through high quality listings and search for roles based on title, technology Question, salary, location, and more.
                        </div>
                        <button className="bg-blue-800 m-2 text-white font-bold py-2 px-4 rounded">
                            Find A Job
                            </button>
            </div>
        </div>
    );
};


export default Options