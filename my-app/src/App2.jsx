import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
const App2 = () => {
  const users=[
    {
      "name": "Rohan Mandhare",
      "age": 22,
      "city": "Indore",
      "profession": "Software Developer",
      "profilePicture": "https://via.placeholder.com/150?text=Rohan"
    },
    {
      "name": "Aisha Khan",
      "age": 28,
      "city": "Mumbai",
      "profession": "Graphic Designer",
      "profilePicture": "https://via.placeholder.com/150?text=Aisha"
    },
    {
      "name": "Vikram Gupta",
      "age": 35,
      "city": "Delhi",
      "profession": "Marketing Manager",
      "profilePicture": "https://via.placeholder.com/150?text=Vikram"
    },
    {
      "name": "Sophia Sharma",
      "age": 30,
      "city": "Bangalore",
      "profession": "Data Scientist",
      "profilePicture": "https://via.placeholder.com/150?text=Sophia"
    },
    {
      "name": "Arjun Mehta",
      "age": 26,
      "city": "Pune",
      "profession": "Photographer",
      "profilePicture": "https://via.placeholder.com/150?text=Arjun"
    }
  ]
  
  return (
    <>
        <Header />
        <div className='p-10'>
        {users.map(function(e,idx){
          return <Card key={idx} userName={e.name} age={e.age} city={e.city} prof={e.profession} image={e.profilePicture} />
        })}
      </div>
      <Footer />
    </>
  );
};

export default App2;
