

//Задача №1
zadacha(1);
let z1 = [];
perebor(z1, 1, 101);

//Задача №2
zadacha(2);
let z2 = [];
perebor(z2, -100, 1);

//Задача №3
zadacha(3);
let z3 = [];
for (let i = 100; i > 0; i--) {
    z3.push(i);
}
console.log(z3);

//Задача №4
zadacha(4);
let z4 = [];
perebor(z4, 1, 101, 0);

//Задача №5
zadacha(5);
let z5 = [];
for (let i = 1; i < 101; i++) {
    
        if (i % 3 == 0) {
            z5.push(i);
        }
}
console.log(z5);


function perebor(a, b, c, d = null) {
    for (let i = b; i < c; i++) {
        if (d != null) {
            if (i % 2 == d) {
                a.push(i);
            }
        }
        else {
            a.push(i);
        }
    }
    console.log(a);
}

function zadacha(a) {
    alert(("Решение задачи №" + a));
    console.log("Задача №" + a);
}

