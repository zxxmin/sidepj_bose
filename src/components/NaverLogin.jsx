import { useEffect } from "react"
import Button from "./Button";

const NaverLogin = () => {
    const { naver } = window;
    const NAVER_CLIENT_ID = "WobRmPvblhTHwtl8Lqgc";
    const NAVER_CALLBACK_URL = "http://localhost:5173/sidepj_bose/successlogin";
    
    const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,
			isPopup: true,
			// loginButton: { color: 'green', type: 1, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()
      
        naverLogin.getLoginStatus(async function (status) {
			if (status) {
				const userid = naverLogin.user.getEmail()
				const username = naverLogin.user.getName()

                console.log(userid)
			}
		})   
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
