let ServerUrl
if (process.env.NODE_ENV === "production") {
    ServerUrl = "https://193.112.11.35"
} else {
    ServerUrl = "http://127.0.0.1:3000"
}

export {
    ServerUrl
}