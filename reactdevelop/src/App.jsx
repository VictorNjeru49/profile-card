import './App.css'
import React from 'react';
import Profilecard from './components/profilecard';


function App() {
  const users = [
    {
      profilepicture: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      name: 'Victor Njeru',
      age: 20,
      bio: 'A software engineer.'
    },
    {
      profilepicture: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
      name: 'David Macharia',
      age: 20,
      bio: 'Front end developer.'
    },
    {
      profilepicture: 'https://placebeard.it/250/250a',
      name: 'Isaac Z. Schlueter',
      age: 30,
      bio: 'backend developer'
    },
    {
      profilepicture: 'https://dummyimage.com/300.png/09f/fff&text=Ash+Allen',
      name: 'Ash Allen',
      age: 25,
      bio: 'Graphic designer'
    }
  ];
return(
  <>
{users.map((user, index) => (
          <Profilecard
            key={index}
            profilepicture={user.profilepicture}
            name={user.name}
            age={user.age}
            bio={user.bio}
          />
        ))}
  </>
)
}


export default App
