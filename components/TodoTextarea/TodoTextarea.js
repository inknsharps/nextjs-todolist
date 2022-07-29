import { useState } from "react"

export default function TodoTextarea() {
  const [text, setText] = useState("Input a message to save it!")

  return (
    <div>
      <textarea defaultValue={ text } onBlur={ event => { setText(event.target.value) 
        console.log(event.target.value) 
      } 
    }/>
    </div>
  )
}