let ServerUrl
if (process.env.NODE_ENV === "production") {
    ServerUrl = "https://gl15.xyz"
} else {
    ServerUrl = "http://127.0.0.1:3000"
}

export {
    ServerUrl
}