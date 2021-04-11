import Homepage from '../pages/Homepage/homepage'
import Login from '../pages/Log in/Login'
import Signin from '../pages/Sign In/Signin'

const homepage = () =>{
    return <Homepage/>
}

const login = () =>{
    return <Login/>
}

const signin = () =>{
    return <Signin/>
}

const notFound = () =>{
    return <p>Not Found</p>
}

export{
    homepage,
    login,
    signin,
    notFound
}