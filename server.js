const http = require('http');
let correct_gmail = "/coderqudratov_gmail_com";
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    const url = req.url;
    let result = "NaN";

    if (url.includes("?")) {
        const route = url.slice(0, url.indexOf("?"));

        if (route === correct_gmail) {
            result = checkUrl(url.slice(url.indexOf("?") + 1));
        }
    }

    res.end(String(result));
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
function checkUrl(url) {
    const seperateArr = url.split("&")
    let result;

    if (seperateArr.length == 2) {
        const xArr = seperateArr[0]
            ? seperateArr[0].split("=")
            : [];

        const yArr = seperateArr[1]
            ? seperateArr[1].split("=")
            : []; const
                x = Number(xArr[1])
        const y = Number(yArr[1])

        if (!Number.isNaN(x) && !Number.isNaN(y) && x > 0 && y > 0 && Number.isInteger(x) && Number.isInteger(y)) {
            if (xArr[0] == "x" && yArr[0] == "y") {
                result = findEKUK(x, y);
            } else if (
                xArr[0] == "y" && yArr[0] == "x"
            ) {
                result = findEKUK(y, x);

            }

        }


    }





    if (result === undefined) {
        return "NaN";
    }

    return result;
}
function findEKUB(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findEKUK(a, b) {

    if (a === 0 || b === 0) {
        return 0;
    }

    return Math.abs((a * b) / findEKUB(a, b));
}