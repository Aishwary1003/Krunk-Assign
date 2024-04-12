
import Header from "./components/Header";
import Chats from "./components/Chats";
import Tags from "./components/Tags";
import BagCard from "./components/BagCard";
import FilterCard from "./components/FilterCard";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-gradient-to-b  overflow-x-hidden bg-gradient-to-b from-sky-400 to-green-200" >
      
        <Header/>
       <Chats/>
       <Tags/>
       <BagCard/>
       <FilterCard/>
       <Footer/>
       
      
    </div>
  );
}

export default App;
