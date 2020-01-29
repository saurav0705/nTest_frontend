import Layout from "./Layout";
import {urlOfImages} from './images';

const Personal = () =>
{
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
                    <div><p class="font-bold text-4l mb-2 mt-2">Stack Overflow </p></div>
                </div>
            </div>
            <div className="p-4">
            <div class="max-w-sm rounded border overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-4xl mb-2">Username</div>
                <div class="text-2xl mb-2">First Last Name</div>
                <div class=" text-2xl mb-2">email@mail.com</div>
                <p class="text-gray-700 text-base">
                Description about user regarding its various interest and other.
                </p>

                <div className="p-2 m-2 bg-red-400 text-white">
                <div class="font-bold text-xl mb-2">Questions Asked</div>
                <p className="text-4l">Question 1</p>
                <p className="text-4l">Question 1</p>
                <p className="text-4l">Question 1</p>
                </div>

                <div className="p-2 m-2 bg-green-400 text-white">
                <div class="font-bold text-xl mb-2">Questions Answered</div>
                <p className="text-4l">Answer 1</p>
                <p className="text-4l">Answer 2</p>
                <p className="text-4l">Answer 3</p>
                </div>
                <p>

                </p>
            </div>
           
            </div>
            <div className="flex justify-center m-4">
            <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Edit
                </button>
            </div>
            </div>
        </div>
        </Layout>
        </>
    );

};


export default Personal;
