import { useRef, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import Header from "../components/Header";
import Button from "../components/Button";
import KakaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";

const Login = () => {
    usePageTitle('BOSE | Login')

    const [form, setForm] = useState('init');
    const [cancelClicked, setCancelClicked] = useState(true);
    const nav = useNavigate();
    const inputRef = useRef(null);

    const onClickNext = (e) => {
        e.preventDefault();

        const emailValue = inputRef.current.value

        if(emailValue === '') {
            alert('email을 작성해 주세요.')
            inputRef.current.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net)$/;
        if (!emailPattern.test(emailValue)) {
            alert('유효한 이메일 주소를 입력해 주세요.');
            inputRef.current.focus();
            return;
        }

        setForm('success')
        
    }

    const onClickCancle = () => {
        if (form === 'init') {
            nav(-1);
        } else if (cancelClicked) {
            setForm('init');
            setCancelClicked(true);
        }
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
                            />

                            <Button
                                onClick={onClickNext}
                                type={'func'}
                                text={'NEXT'}
                            />
                        </form>
                        <span>OR</span>
                        <div>
                            <KakaoLogin />
                            <NaverLogin />
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
                                value={inputRef.current.value}
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