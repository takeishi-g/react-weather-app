import { useState } from "react"



const Form = () => {
  const [ sity, setSity ] = useState<string>("")
  const getWeather = async (e:any) => {
    e.preventDefault()
    await fetch("https://api.weatherapi.com/v1/current.json?key=d5e39515a0004593ba0113615230906&q=London&aqi=no"
    )
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <form>
      <input type="text" name="sity" placeholder="都市名" onChange={(e) => setSity(e.target.value)}/>
      {sity}
      <button type="submit" onClick={getWeather}>Get Weater</button>
    </form>
  )
}

export default Form