var sum = 0;
var n;
var count = -1;
while (n != 0) {
    n = Number(prompt("숫자를 입력해 주세요(0 = 종료)"));
    sum += n;
    count++;
    console.log(count, n, sum);
}