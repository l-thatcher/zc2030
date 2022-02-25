function LoginPage(){
    function loginHandler(enteredLoginData) {
        console.log(enteredLoginData)
    }

    return <LoginForm onLoginSubmit={loginHandler}/>
}

export default LoginPage;