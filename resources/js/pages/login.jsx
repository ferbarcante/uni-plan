import React from "react";
import "../../sass/pages/Login.scss";
const Login = () => {
    return (
        <main>
        <div className="container">
        <div className="container-form">
                <div className="title-login"><span>Login</span></div>
                <form action="">
                    <div className="div-label"><label htmlFor="email">email</label></div>
                    <input placeholder="digite seu email" type="email" name="" id="" />
                    <div className="div-label"><label htmlFor="email">senha</label></div>
                    <input placeholder="digite sua senha" type="password" name="" id="" />
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
        </main>
    );
};

export default Login;
