import { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "./Button";

const SuccessLogin = () => {
    const nav = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    const [username, setUsername] = useState('이름이 없음');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const getKakaoToken = async () => {
        try {
            // 카카오 API를 사용하여 액세스 토큰 요청
            const response = await fetch('https://kauth.kakao.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'authorization_code',
                    client_id: '68bbec7aa1f63937ebb5311c52d8db22', // 여기에 본인의 REST API 키를 입력하세요.
                    redirect_uri: REDIRECT_URI, // 리다이렉트 URI
                    code: code,
                }),
            });

            const data = await response.json();
            const accessToken = data.access_token;

            // 액세스 토큰을 사용하여 사용자 정보 요청
            const userResponse = await fetch('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
            });

            const userData = await userResponse.json();
            const username = userData.kakao_account.profile.nickname;

            setUsername(username);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Error fetching user data');
            setLoading(false);
        }
    };

    const getNaverToken = async () => {
        if(!location.hash) return;
        const token = location.hash.split('=')[1].split('&')[0];
        console.log(token);

        try {
            const response = await fetch('/api/naver/v1/nid/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            const naverUser = await response.json();
            const username = naverUser.response.name
            setUsername(username);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Error fetching user data');
                setLoading(false);
        }
    }

    useEffect(() => {
        if (code) {
            getKakaoToken();
        } else {
            getNaverToken();
        }
    }, [code]);

    if (loading) {
        return <CenteredMessage message="Loading..." />;
    }

    if (error) {
        return <CenteredMessage message={error} />;
    }

    return(
        <>
        <div style={{margin: '0 auto 50px', paddingTop: '100px', textAlign: 'center'}}>
            <strong>{code ? '카카오' : '네이버'} 로그인 성공</strong>
            <p><strong>{username}</strong>님 반갑습니다.</p>
        </div>
        {code
            ? <Button
                onClick={() => nav('/')}
                type={'func'}
                text={'메인으로 가기'}
              />
            : ''
        }
        
        </>

    )
}

const CenteredMessage = ({ message }) => (
    <div style={{ margin: '0 auto 50px', padding: '100px', textAlign: 'center' }}>
        <p>{message}</p>
    </div>
);

export default SuccessLogin