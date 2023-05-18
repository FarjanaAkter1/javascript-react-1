import React from "react"

 export const TweetS1 =({onClicked})=>{

return (
 <> <div className ="TweetS1">
  It's payday!!! <button onClick = {() => onClicked("like")}>Like!</button></div>
  </>
)
 }
