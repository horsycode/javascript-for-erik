for (let i = 0; i<10; i = i + 1) {
    console.log('hello, world!', i);
    sleep(1000)
}

function sleep(ms) {
    const start = new Date();
    while (new Date() - start < ms) { }
}