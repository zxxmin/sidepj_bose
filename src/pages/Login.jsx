import { useRef, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import Header from "../components/Header";
import Button from "../components/Button";
import KakaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";

let REDIRECT_URI;
let ServerName = window.location.hostname;

switch (ServerName) {
    case 'localhost':
        REDIRECT_URI = 'http://localhost:5173/sidepj_bose/successlogin';
        break;
    case 'zxxmin.github.io':
        REDIRECT_URI = 'https://zxxmin.github.io/sidepj_bose/successlogin';
        break;
    default :
        break;
}

const Login = () => {
    usePageTitle('BOSE | Login')
    const [form, setForm] = useState('init');
    const [inputVal, setInputVal] = useState('');
    const nav = useNavigate();
    const inputRef = useRef(null);


    const onClickNext = (e) => {
        e.preventDefault();

        if(inputVal === '') {
            alert('email을 작성해 주세요.')
            inputRef.current.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net)$/;
        if (!emailPattern.test(inputVal)) {
            alert('유효한 이메일 주소를 입력해 주세요.');
            inputRef.current.focus();
            return;
        }

        setForm('success')
        
    }

    const onClickCancle = () => {
        form === 'init' ? nav(-1) : setForm('init');
    }

    return (
        <>
        <Header type={'LOGIN'} />

        <div className="login_bg">
            <div className="fnc-area">
                <div className="l-area">
                    <button onClick={onClickCancle}>CANCLE</button>
                    {form === 'init' ? (
                        <>
                        <h2>Sign In or Join My Bose</h2>
                        <p>
                            Please enter your email address to sign in or register to become a My Bose member.
                        </p>
                        </>
                        ) : (
                        <>
                        <h2>Join My Bose</h2>
                        <p>
                            You will need to verify your email in order to create an account.
                        </p>
                        </>
                        )
                    }
                </div>
                <div className="r-area">
                    {form === 'init' ? (
                        <>
                        <form>
                            <input
                                type="text"
                                placeholder="Email"
                                ref={inputRef}
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                            />

                            <Button
                                onClick={onClickNext}
                                type={'func'}
                                text={'NEXT'}
                            />
                        </form>
                        <span>OR</span>
                        <div>
                            <KakaoLogin
                                REDIRECT_URI={REDIRECT_URI}
                            />
                            <NaverLogin
                                REDIRECT_URI={REDIRECT_URI}
                            />
                            <Button
                                onClick={() => alert('연동 진행 중입니다.')}
                                type={'google'}
                                text={'SIGN IN/JOIN WITH GOOGLE'}
                            />
                        </div>
                        </>
                    ) : (
                        <>
                        <form>
                            <input
                                type="text"
                                value={inputVal}
                                disabled
                            />

                            <Button
                                text={'SEND VERIFICATION CODE'}
                            />

                            <span>
                                Check your email to verify. Code is valid for 5 minutes.
                            </span>
                        </form>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;