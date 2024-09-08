import { useEffect } from "react"
import Button from "./Button";

const KakaoLogin = () => {
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init('03f79581cf0fb8864d8948d4d10494da');
        }
      }, []);

      const onLoginKakao = () => {
        window.Kakao.Auth.login({
          success: function(authObj) {
            console.log(authObj);
          },
          fail: function(err) {
            console.error(err);
          },
        });
      };

      return (
        <Button
            type={'kakao'}
            onClick={onLoginKakao}
            text={'SIGN IN/JOIN WITH KAKAO'}
        />
      )
    
}

export default KakaoLogin;