
const http = require('http');

let correct_gmail = "/coderqudratov_gmail_com";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    const url = req.url;
    let result = "NaN";

    if (url.includes("?")) {
        const route = url.slice(0, url.indexOf("?"));

        if (route === correct_gmail) {
            result = checkUrl(url.slice(url.indexOf("?") + 1));
        }
    }

    res.end(String(result));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function checkUrl(url) {
    const seperateArr = url.split("&");
    let result;

    if (seperateArr.length == 2) {
        const xArr = seperateArr[0]
            ? seperateArr[0].split("=")
            : [];

        const yArr = seperateArr[1]
            ? seperateArr[1].split("=")
            : [];

        let x, y;

        try {
            x = BigInt(xArr[1]);
            y = BigInt(yArr[1]);
        } catch {
            return "NaN";
        }

        if (x > 0n && y > 0n) {
            if (xArr[0] == "x" && yArr[0] == "y") {
                result = findEKUK(x, y);
            } else if (xArr[0] == "y" && yArr[0] == "x") {
                result = findEKUK(y, x);
            }
        }
    }

    if (result === undefined) {
        return "NaN";
    }

    return result.toString();
}

function findEKUB(a, b) {
    while (b !== 0n) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findEKUK(a, b) {
    if (a === 0n || b === 0n) {
        return 0n;
    }

    return (a * b) / findEKUB(a, b);
}
