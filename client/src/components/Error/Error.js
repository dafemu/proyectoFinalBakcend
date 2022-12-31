const Error = ({error}) => {
  return (
    <div className="w-100">
      <h1 className="alert alert-danger">{error}</h1>      
    </div>    
  )
}

export default Error;