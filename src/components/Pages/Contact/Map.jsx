const Map = () => {
    return (
        <div className="py-20 w-11/12 lg:w-8/12 mx-auto">
            <h1 className="text-2xl md:text-3xl text-center font-bold capitalize text-black">Find us on google map</h1>
            <div className="mt-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.6932002654576!2d90.56373737507471!3d23.829506385735346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cb0a4c65ef27%3A0xf54f56affbffdc99!2sGreen%20University%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1696179458820!5m2!1sen!2sbd" width="100%" height="450" style={{border:'0', borderRadius: '5px'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Map;