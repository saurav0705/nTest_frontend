import {urlOfImages} from '../../public/icons/assets/images';
const Social = () => {
    return(
        <div className="container mx-auto">
            <center>
                <div className="w-5/6">
                    <img className="h-20 my-4" src={urlOfImages["stack-overflow"]}/>
                </div>
            <div className="w-5/6">
            <button className="bg-white-500 w-full border border-black max-w-xs text-black py-2 px-6 rounded">
                <img className="h-4 m-1" src={urlOfImages.google} align="left"/> Log in With Google
                </button>
            </div>
            <div className="w-5/6">
            <button className="bg-blue-700 border w-full max-w-xs text-white py-2 px-4 rounded">
            <img className="h-4 m-1" src={urlOfImages.facebook} align="left"/>Log in With Facebook
                </button>
            </div>
            <div className="w-5/6">
            <button className="bg-gray-800 border w-full max-w-xs text-white py-2 px-6 rounded">
            <img className="h-4 m-1" src={urlOfImages.github} align="left"/>Log in With Github
                </button>                
            </div>
            </center>
        </div>
    );
};


export default Social;
