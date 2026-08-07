import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
  <Card
    user="Soumya"
    age={25}
    img="https://t3.ftcdn.net/jpg/07/51/50/32/360_F_751503223_fhnAvwTEjUA80xomAAQVmQYbwwfRWkXY.jpg"
  />

  <Card
    user="Suraj"
    age={24}
    img='https://plus.unsplash.com/premium_photo-1784965917345-ecb701bec849?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  />

  <Card
    user="Gaurav"
    age={24}
    img='https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg'
  />
</div>
  )
}

export default App