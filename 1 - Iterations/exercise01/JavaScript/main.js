function solution(N) {
    var a = [], b = [], r = "", int = 0;
    for (var i = N; i >= 1; i = i / 2)
        a.push(Math.floor(i % 2));
    for (var i = a.length - 1; i >= 0; i--)
        b[b.length] = a[i];
    for (var i = 0; i <= b.length - 1; i++)
        r = r + b[i];
    a = r.split('1');
    for (var i = 0; i <= a.length - 1; i++)
        if (int < a[i].length)
            int = a[i].length;
    return int;
}

window.onload = function () {
    console.log(solution(1041));
};