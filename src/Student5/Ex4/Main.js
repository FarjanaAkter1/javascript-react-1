import React from 'react'

import {TweetS} from './TweetS'
import { TweetS1 } from './TweetS1'
import { TweetS2 } from './TweetS2'
import { TweetS4 } from './TweetS4'
import './Main.css'
import { useState } from 'react';

export const Main = () => {
let [counter,setCounter] = useState(0);
const onHandleClick =(likeClick) =>{
  if (likeClick === "like"){
    setCounter(++counter);
  }
}



  return (
    <div>
    <TweetS> </TweetS> 

<div> Total Likes:{ counter} </div>
      <TweetS1 onClicked={onHandleClick}> </TweetS1>
      <TweetS2 onClicked={onHandleClick}> </TweetS2>
      <TweetS4 onClicked={onHandleClick}> </TweetS4>
    </div>
  )
}
