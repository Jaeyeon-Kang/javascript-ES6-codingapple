export default function Page() {
    // ..spread operator

    // Array에 붙이면 대괄호를 제거해줍니다
    var 어레이 = ['hello', 'world'];
    console.log('...어레이: ', ...어레이);

    // 문자에 붙이면요 문자를 하나씩 해체해서 펼쳐줍니다
    var 문자 = 'hello';
    console.log('...문자: ', ...문자);
    console.log('문자[1] :', 문자[1]);

    // 어디다가 쓰면 좋을까
    // 쓸곳1. 어레이 합치기/복사
    var a = [1, 2, 3];
    var b = [4, 5];
    var c = [...a, ...b];
    console.log('c: ', c);

    // 복사 이렇게 하면 약간 이상함
    // d에만 4를 추가했는데 e에도 들어가버림.
    var d = [1, 2, 3];
    var e = d;
    d[3] = 4;

    console.log('d: ', d);
    console.log('e: ', e);

    // 각각 독립적인 값을 가지도록 array, object를 복사하려면 spread operator이용
    var f = [1, 2, 3];
    var g = [...f];
    f[3] = 4;
    console.log('f:', f);
    console.log('g: ', g);

    // 쓸곳2. 오브젝트 합치기 / deep copy
    //
    var o1 = { a: 1, b: 2 };
    var o2 = { ...o1, c: 3 };
    console.log('o2: ', o2);

    //o1을 o2에 deep copy하려면?
    var o3 = { a: 1, b: 2 };
    // 값 중복이 일어나면 가장 뒤에 있는걸 적용
    var o4 = { a: 2, ...o3 };
    var o5 = { ...o3, a: 2 };
    console.log('o4: ', o4);
    console.log('o5: ', o5);
    // spread operator는 중괄호 안, 대괄호 안, 함수 소괄호 안에서만 쓸 수 있다

    // 쓸곳3. 함수 파라미터 넣을때
    function 더하기(a, b, c) {
        console.log('a+b+c :', a + b + c);
    }

    더하기(1, 2, 3); //6

    //array내의 모든 데이터를 파라미터로 집어넣고 싶은 경우
    var 어레이2 = [10, 20, 30];
    //더하기([10,20,30]) 안됨

    // 번거롭다
    더하기(어레이2[0], 어레이2[1], 어레이2[2]);

    // spread operator 적용
    더하기(...어레이2);

    // 이렇게도 쓸 수 있음
    더하기.apply(undefined, 어레이);

    // apply함수란?
    var person = {
        인사: function () {
            console.log(this.name + '안녕');
        },
    };

    // 만약 인사라는 함수를 너무 잘 만들어서 person2에도 적용하고 싶다?
    var person2 = {
        name: ' 손흥민',
    };

    // person에도 적용되고있음
    // 뒤에 파라미터도 집어넣을 수 있다
    person.인사.apply(person2, [1, 2]);

    return <>hi</>;
}
