const a=async()=>{
    data=await fetch('http://127.0.0.1:8000')
    console.log(data)
}

a()
