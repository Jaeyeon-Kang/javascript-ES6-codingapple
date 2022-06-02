export default function Page() {
    // 해체분석기
    var pants = 20;
    var socks = 100;
    `바지${pants} 양말${socks}`;

    function 해체분석기(문자들, 변수들1, 변수들2) {
        console.log(문자들[1] + 변수들1 + 문자들[0] + 변수들2);
    }

    해체분석기`바지${pants} 양말${socks}`;

    return <>hi</>;
}
