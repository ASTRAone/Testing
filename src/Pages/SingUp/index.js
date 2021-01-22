import React, {Component, useEffect, useState} from 'react';
import './style.css';

import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { postUserSignUp } from '../../store/singup/action';
import { NavLink } from 'react-router-dom';

const SingUp = (props) => {

    const [data, setData] = useState(
        {
            email: '',
            pass: '',
            phone: '',
            invited_by: 'RU-637164',
            user_name: '',
            user_surname: '',
            key: 'RU'
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

    // Зарегистрироваться
    const postSignUp = (e) => {
        e.preventDefault();

        const params = {
            user: {
                email: data.email,
                password: data.pass
            },
            
            phone: data.phone,
            invited_by: data.invited_by,
            name: data.user_name,
            surname: data.user_surname,
            country_key: data.key
        }

        props.postUserSignUp(params, () => {
            alert("Данные успешно отправлены");
            window.location.assign("http://localhost:3000/");

            setData({
                email: '',
                pass: '',
                phone: '',
                invited_by: 'RU-637164',
                user_name: '',
                user_surname: '',
                key: 'RU'
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

                            <div className="wrap-input100 validate-input">
                                <InputMask
                                    mask="+99999999999"
                                    className="input100" 
                                    type="text" 
                                    name="phone" 
                                    required
                                    placeholder="Phone"
                                    value={data.phone}
                                    
                                    onChange={(e) => setEditData("phone", e.target.value)} />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    placeholder="Invited by"
                                    name="invited_by"
                                    value={data.invited_by}
                                    readOnly />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="user-name"
                                    placeholder="Name"
                                    required
                                    value={data.user_name}
                                    onChange={(e) => setEditData("user_name", e.target.value)} />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="user-surname"
                                    placeholder="Surname"
                                    required
                                    value={data.user_surname}
                                    onChange={(e) => setEditData("user_surname", e.target.value)} />
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="key"
                                    placeholder="Country key"
                                    required
                                    value={data.key} />
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button
                                        className="login100-form-btn"
                                        onClick={postSignUp}
                                         >
                                            Sign Up
                                    </button>
                                </div>
                            </div>

                            <div className="text-center p-t-115">
                                <span className="txt1">
                                    You have an account?
                                </span>

                                <NavLink
                                    className="txt2" 
                                    to="/login">
                                        Login
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
        loginUpInfo: state.loginUp.userLoginUpInfo
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        postUserSignUp
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(SingUp);