import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Process from "../Process";
import SearchBar from "../SearchBar";
import axios from "axios";
import Widget from "../Widget";
const Home = () => {
  const [url, setUrl] = useState("");
  const [widget, setWidget] = useState(null)
  const searchUrl = () => {
    // console.log(url.substring(17,28));
    if (url) {
      axios
        .get(`https://api.vevioz.com/api/widget/mp3/${url.substring(17, 28)}`)
        .then((res) => {
          // console.log(res.data);
          setWidget(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("url is empty");
    }
  };
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative p-5 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <SearchBar url={url} setUrl={setUrl} searchUrl={searchUrl} />
        </div>
        <Widget widgetData={widget} />
        <Process />
      </main>
    </>
  );
};

export default Home;
