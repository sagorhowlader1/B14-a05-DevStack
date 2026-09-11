import { Suspense } from "react";
import Banner from "./compoents/devStack/Banner";
import Footer from "./compoents/devStack/Footer";
import Navbar from "./compoents/devStack/Navbar";
import Technology from "./compoents/devStack/Technology";
import type { IDevStack } from "./Type/type";



const technologyFetch = async ():Promise<IDevStack[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  // console.log(data);
  return data;
}

function App() {
// console.log(technologyPromise);
const technologyPromise = technologyFetch();

  return (
    <>
        <Navbar />
        <Banner />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Technology technologyPromise={technologyPromise} />
        </Suspense>
        <Footer />
    </>
  )
}

export default App;
