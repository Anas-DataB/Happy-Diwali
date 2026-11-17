const array = [1, 2, 3, 4, 6, 4, 2, 1, 2, 3];
const runs = [];
runs.push(array.slice(0, 2));
for (let i = 2; i < array.length; i++) {
    const last = i -1;
    const lastSecond = i-2 ;
    
}
console.log(runs);