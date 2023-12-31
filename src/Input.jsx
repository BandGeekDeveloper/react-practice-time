import {useState} from 'react'

export default function Input() {

  const [currentTime, setCurrentTime] = useState(new Date())

  setInterval(() => {
    setCurrentTime(new Date())
  }, 1000)
  
  return(
    <div>
    <input placeHolder='Hello'/>
      <pre>{currentTime.toLocaleTimeString()}</pre>
    </div>
  )
}