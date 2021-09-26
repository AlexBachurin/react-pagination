import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useFetch } from './utils/useFetch'
import SingleFollower from "./components/SingleFollower";
import Loading from "./components/Loading";
function App() {

  const { data, loading } = useFetch();

  const [followersList, setFollowersList] = useState(data[0])
  console.log(data[0]);
  return (
    <main>
      <Navbar />
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        {loading ? <Loading /> : <div className="container">
          {followersList.map(item => {
            return <SingleFollower key={item.id} {...item} />
          })}
        </div>}
      </section>
      <Footer />
    </main>
  );
}

export default App;
