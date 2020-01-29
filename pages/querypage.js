import Layout from "./Layout";
import { urlOfImages } from "./images";

const Query = () => {

    return(
        <Layout>
            <div className="flex overflow-hidden">
                <div className="hidden md:block w-1/6 p-8">
                    <div class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded m-4">
                        Answer
                    </div>

                    <div class=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                        Ask A Question
                    </div>
                    <div class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                        Top
                    </div>
                    <div class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                        Bottom
                    </div>
                    
                </div>
            <div className="block text-center  border-gray-600 w-screen md:w-5/6">
                <div className="text-4xl bg-red-500 text-white p-8 my-4">
                    Here Goes The Question ?
                </div>
                <div className="text-2xl bg-green-500 p-8 text-white">
                    Answers
                    <div className="flex justify-center bg-green-300 p-4 m-4">
                    <div className="block md:flex justify-center w-full">
                    <div><center>
                        <img src={urlOfImages.answer} className="h-6 mt-5"/></center>
                    </div>
                    
                    <div className='p-1 w-auto text-4m md:text-2xl'>
                        <span className="ml-2">
                       weihfwehfohweofi jknvmvnefovnevndjcj kdjcvjedcnoekmnc jbedvjnefovn nkjbndovnedf
                       </span>
                       <div className="text-right text-gray-500">-- author date</div>
                    </div>
                    <div className="px-4 mx-6">
                    <button class="bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4">Upvote 5</button> 
                    
                    <button class="bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ">Downvote 7</button> 
                    </div>
                    </div>
                    </div>

                    <div className="flex justify-center bg-green-300 p-4 m-4">
                    <div className="block md:flex justify-center w-full">
                    <div><center>
                        <img src={urlOfImages.answer} className="h-6 mt-5"/></center>
                    </div>
                    
                    <div className='p-1 w-auto text-4m md:text-2xl'>
                        <span className="ml-2">
                       weihfwehfohweofi jknvmvnefovnevndjcj kdjcvjedcnoekmnc jbedvjnefovn nkjbndovnedf
                       </span><div className="text-right text-gray-500">-- author date</div>
                    </div>
                    <div className="px-4 mx-6">
                    <button class="bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4">Upvote 5</button> 
                    
                    <button class="bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ">Downvote 7</button> 
                    </div>
                    </div>
                    </div>

                    <div className="flex justify-center bg-green-300 p-4 m-4">
                    <div className="block md:flex justify-center w-full">
                    <div><center>
                        <img src={urlOfImages.answer} className="h-6 mt-5"/></center>
                    </div>
                    
                    <div className='p-1 w-auto text-4m md:text-2xl'>
                        <span className="ml-2">
                       weihfwehfohweofi jknvmvnefovnevndjcj kdjcvjedcnoekmnc jbedvjnefovn nkjbndovnedf
                       </span><div className="text-right text-gray-500">-- author date</div>
                    </div>
                    <div className="px-4 mx-6">
                    <button class="bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4">Upvote 5</button> 
                    
                    <button class="bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ">Downvote 7</button> 
                    </div>
                    </div>
                    </div>

                    <div className="flex justify-center bg-green-300 p-4 m-4">
                    <div className="block md:flex justify-center w-full">
                    <div><center>
                        <img src={urlOfImages.answer} className="h-6 mt-5"/></center>
                    </div>
                    
                    <div className='p-1 w-auto text-4m md:text-2xl'>
                        <span className="ml-2">
                       weihfwehfohweofi jknvmvnefovnevndjcj kdjcvjedcnoekmnc jbedvjnefovn nkjbndovnedf
                       </span><div className="text-right text-gray-500">-- author date</div>
                    </div>
                    <div className="px-4 mx-6">
                    <button class="bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4">Upvote 5</button> 
                    
                    <button class="bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ">Downvote 7</button> 
                    </div>
                    </div>
                    </div>

                    <div className="flex justify-center bg-green-300 p-4 m-4">
                    <div className="block md:flex justify-center w-full">
                    <div><center>
                        <img src={urlOfImages.answer} className="h-6 mt-5"/></center>
                    </div>
                    
                    <div className='p-1 w-auto text-4m md:text-2xl'>
                        <span className="ml-2">
                       weihfwehfohweofi jknvmvnefovnevndjcj kdjcvjedcnoekmnc jbedvjnefovn nkjbndovnedf
                       </span><div className="text-right text-gray-500">-- author date</div>
                    </div>
                    <div className="px-4 mx-6">
                    <button class="bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4">Upvote 5</button> 
                    
                    <button class="bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ">Downvote 7</button> 
                    </div>
                    </div>
                    </div>

                    <div className="flex justify-center bg-green-300 p-4 m-4">
                    <div className="block md:flex justify-center w-full">
                    <div><center>
                        <img src={urlOfImages.answer} className="h-6 mt-5"/></center>
                    </div>
                    
                    <div className='p-1 w-auto text-4m md:text-2xl'>
                        <span className="ml-2">
                       weihfwehfohweofi jknvmvnefovnevndjcj kdjcvjedcnoekmnc jbedvjnefovn nkjbndovnedf
                       </span><div className="text-right text-gray-500">-- author date</div>
                    </div>
                    <div className="px-4 mx-6">
                    <button class="bg-green-500 hover:bg-green-700 w-full text-white p-2 px-4 mt-1 rounded mr-4">Upvote 5</button> 
                    
                    <button class="bg-red-500 hover:bg-red-700 text-white w-full rounded px-4 p-2 mt-1 ">Downvote 7</button> 
                    </div>
                    </div>
                    </div>
                    

                </div>

            </div>
            {/* <div class="bg-black  max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div> */}
            </div>
            
        </Layout>
        
    )
};


export default Query;