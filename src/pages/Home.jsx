
const Home = () => {
     return ( 
          <div className="grid grid-cols-3 gap-5 my-10 ">
               <div className="bg-[#134a63] py-5 px-8 rounded-2xl">
                    <p className="text-white font-medium">To add a new contact, click on the Add Contact option on the side menu.</p>
               </div>
               <div className="bg-[#134a63] py-5 px-8 rounded-2xl">
                    <p className="text-white font-medium">To check all the users, click on the All Contact option on the side menu.</p>
               </div>
               <div className="bg-[#134a63] py-5 px-8 rounded-2xl">
                    <p className="text-white font-medium">To check the users details, click on the user card on the All Contact page.</p>
               </div>
          </div>
      );
}
 
export default Home;