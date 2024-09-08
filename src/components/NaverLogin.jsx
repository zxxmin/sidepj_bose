import { useEffect } from "react"
import Button from "./Button";

const NaverLogin = () => {
    const { naver } = window;
    const NAVER_CLIENT_ID = "WobRmPvblhTHwtl8Lqgc";
    const NAVER_CALLBACK_URL = "http://localhost:5173/login";
    
    const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,
			isPopup: true,
			// loginButton: { color: 'green', type: 1, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()
      
        
	}

    useEffect(() => {
		initializeNaverLogin()
	}, [])


    return (
        <div id="naverIdLogin">
            <Button
                type={'naver'}
                text={'SIGN IN/JOIN WITH NAVER'}
                id={'naverIdLogin_loginButton'}
            />
        </div>
    )
}

export default NaverLogin
