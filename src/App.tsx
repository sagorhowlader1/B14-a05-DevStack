import { Suspense, useState } from "react";
import Banner from "./compoents/devStack/Banner";
import Footer from "./compoents/devStack/Footer";
import Navbar from "./compoents/devStack/Navbar";
import Technologies from "./compoents/devStack/Technologies";
import type { IDevStackType } from "./Type/type";



const technologyFetch = async (): Promise<IDevStackType[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}                                                                                                                                        


function App() {
  const [stack, setStack] = useState([])
const technologiesPromise = technologyFetch();

  return (
    <>
        <Navbar />
        <Banner />
        <Suspense fallback={<h2 className="text-center">Loading...</h2>}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>
        <Footer />
    </>
  )
}

export default App;
