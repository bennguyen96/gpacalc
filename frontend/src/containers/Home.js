import React from 'react';
import Navbar from '../components/Navbar';
import SubjectList from '../components/SubjectList';

const Home = () => (
  <div className="flex flex-col items-center justify-start gap-10">
    <Navbar />
    <div className="flex h-screen">
      <SubjectList />
    </div>
  </div>
);

export default Home;
