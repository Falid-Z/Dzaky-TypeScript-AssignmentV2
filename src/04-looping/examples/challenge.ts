// contoh awal
let starAmount = 0;

for (let i = 1; i <= 5; i++) {
    starAmount += i;
    console.log("*".repeat(i));
}

console.log("Total stars: " + starAmount);
// contoh (1)
let starAmount = 0;

for (let i = 5; i >= 1; i--) {
    starAmount += i;
    console.log("*".repeat(i));
}

console.log("Total stars: " + starAmount);

// contoh (2)
let starAmount = 0;
                    //bertambah
for (let i = 1; i <= 3; i++) {
    starAmount += i;
    console.log("*".repeat(i));
}
                    //berkurang
for (let i = 2; i >= 1; i--) {
    starAmount += i;
    console.log("*".repeat(i));
}

console.log("Total stars: " + starAmount);