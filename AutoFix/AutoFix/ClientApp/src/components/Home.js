import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Home = ({ className }) => {
  const fetchTest = () => {
    return axios
      .get(`https://localhost:7046/api/motorista`)
      .then((e) => console.log(e));
  };
  useEffect(() => {
    fetchTest();
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   setPosition(position);
    // });
  }, []);
  return (
    <div className={className}>
      <section className="section bg-home home-half">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="text-white text-center col-lg-8 offset-lg-2">
              <h1 className="home-title">
                Encontre as melhores oficinas mais próximas
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="home">Oficinas</span>
        </div>
      </section>
    </div>
  );
};

export default styled(Home)`
  .home-half {
    padding-bottom: 150px;
    padding-top: 220px;
  }

  .bg-home {
    background: url("https://i.imgur.com/oIFGeWq.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: -1rem;
  }

  .home-title {
    font-size: 46px;
    line-height: 64px;
  }

  .text-white {
    --bs-text-opacity: 1;
    z-index: 9999;
    color: #fff;
  }

  .bg-overlay {
    background: linear-gradient(to right, #597253, #065679);
    opacity: 0.8;
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
  }

  span.home {
    font-size: 26px;
    font-weight: 500;
  }

  .section {
    position: relative;
  }

  .section-sm {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .carousel {
    margin-top: 1.5rem;
  }
`;
