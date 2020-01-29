const Banner = () => {

    return (
        <div className=" bg-yellow-500 py-20" >
            <div className="flex-row content-center">
            <div  className="flex justify-center m-2">
                <div>
                <h1 className="text-6xl"><center>We &lt;3 people who code</center></h1>
                </div>
            </div>
            <div className="text-2xl flex justify-center m-2">
                <center>
            We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
            </center>
            </div>
            <div className="block md:flex xl:flex justify-center">
            <center>
                <div>
                    
                <button className="bg-white  w-15 m-2 border border-orange-500 text-orange-500  py-2 px-4 rounded">
                For Developers
                </button>
                </div>
                <div>
                <button className="bg-orange-500 w-15 border text-white  py-2 px-4 rounded">
                For Buisnesses
                </button>
                </div>
                </center>
            </div>
            
        </div>
        </div>
    );
};


export default Banner;