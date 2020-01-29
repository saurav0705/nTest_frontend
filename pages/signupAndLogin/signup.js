import Social from '../signupAndLogin/social';
import Layout from '../Layout';

const SignUp = () => {
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
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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

export default SignUp;