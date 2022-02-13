# JsMeasure

### This program is used to measure how long an action takes in javascript. It was developed based on C++ language and Cheerp compiler.

Compile Program:
```console
C:/opt/bin/clang++ -target cheerp -Oz main.cpp -o index.js -std=c++11
```

Usage of Timer: 

```javascript

let t = new Timer();
t.start();
for (let index = 0; index < 7000000; index++) {
    document.getElementById("test")
}
t.stop();
console.log(t.getElapsedTimeAsNs());
console.log(t.getElapsedTimeAsMs());
```

Usage of Measure:

```javascript
let t = new Timer();
let val = measure("new measurement", (() => {
    t.start();
    console.log(true);
    for (let index = 0; index < 1000000000.; index++) {
        Math.random();
    }
    t.stop();
    return t.getElapsedTimeAsMs();
})());

console.log(val);
```

Use with WebAssembly : 

```javascript
WebAssembly.instantiateStreaming(
    fetch('index.wasm'),
    importObject
).then(result => {
    const measure = result.instance.exports.measure;
    const Timer = result.instance.exports.Timer;

    let t = new Timer();
    let val = measure("new measurement", (() => {
        t.start();
        console.log(true);
        for (let index = 0; index < 1000000000; index++) {
            Math.random();
        }
        t.stop();
        return t.getElapsedTimeAsMs();
    })());

    console.log(val);
});
```


### See
[Cheerp](https://leaningtech.com/cheerp/)