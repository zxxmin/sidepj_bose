import { useEffect } from "react"
import Button from "./Button";




const KakaoLogin = ({REDIRECT_URI}) => {

  const REST_API_KEY = '68bbec7aa1f63937ebb5311c52d8db22';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init('03f79581cf0fb8864d8948d4d10494da');
        }
      }, []);

      const onLoginKakao = () => {
        window.Kakao.Auth.login({
          success: function(authObj) {
            console.log(authObj);
            window.location.href = link;
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