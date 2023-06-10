type FormPopsType ={
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props:FormPopsType) => {
  
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="sity" placeholder="都市名" onChange={(e) => props.setCity(e.target.value)}/>
      
    </form>
  )
}

export default Form