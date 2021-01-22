import React, {useState} from 'react';
import './style.css';

import { NavLink } from 'react-router-dom';
import { postUserSignIn } from '../../store/login/action';
import { connect } from 'react-redux';

const Login = (props) => {

    const [data, setData] = useState(
        {
            email: '',
            pass: ''
        }
    );

    // Изменение массива data
    const dataEdit = (name, value) => {
        let newObj = {...data};
        newObj[name] = value;

        return newObj;
    };

    // Изменение данных формы
    const setEditData = (name, value) => {
        setData(dataEdit(name, value));
    };

    // Авторизоваться
    const setPostLogin = (e) => {
        e.preventDefault();

        const params = {
            username: data.email,
            password: data.pass
        };

        props.postUserSignIn(params, () => {
            console.log("Информация о пользователе", props.loginInInfo);

            alert("Данные успешно отправлены");
            window.location.assign("http://localhost:3000/");

            setData({
                email: '',
                pass: ''
            });
        });
    };

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-26">
                                Welcome
                            </span>
                            <span className="login100-form-title p-b-48">
                                <i className="zmdi zmdi-font"></i>
                            </span>

                            <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="email" 
                                    required
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) => setEditData("email", e.target.value)} />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"></i>
                                </span>
                                <input 
                                    className="input100" 
                                    type="password" 
                                    name="pass" 
                                    required
                                    placeholder="Password"
                                    value={data.pass}
                                    onChange={(e) => setEditData("pass", e.target.value)} />
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button
                                        className="login100-form-btn"
                                        onClick={setPostLogin}
                                         >
                                            Login
                                    </button>
                                </div>
                            </div>

                            <div className="text-center p-t-115">
                                <span className="txt1">
                                    Don’t have an account?
                                </span>

                                <NavLink
                                    className="txt2" 
                                    to="/signup">
                                        Sign Up
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        <div id="dropDownSelect1"></div>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loginInInfo: state.loginIn.userLoginInInfo
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        postUserSignIn
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(Login);