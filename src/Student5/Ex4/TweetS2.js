import React from "react"

 export const TweetS2 =({onClicked})=>{

return (
 <> <div className ="TweetS2">

I just bought a new car! <button onClick = {() => onClicked("like")}>Like!</button></div>
  
  </>
)
 }