import React from 'react';
import Navbar from '../components/Navbar';
import SubjectList from '../components/SubjectList';

const Home = () => (
  <div className="flex flex-col gap-10 justify-start items-center">
    <Navbar />
    <div className="flex justify-center w-screen">
      <SubjectList />
    </div>
  </div>
);

export default Home;
