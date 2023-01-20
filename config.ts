const config = {
    baseUrl:
        process.env.BASE_URL ||
        "https://payment-gateway-stage.dev.limitlex.io/",
    recordVideos: process.env.PWVIDEO || false,
    browser: process.env.BROWSER || "chromium", // chromium or firefox or webkit
    defaultTimeout: 60 * 1000, // milliseconds
    runHeadless: true,
    runSlow: 0, // milliseconds
    cronsUrl: "",
    username: "marko.petricevic@servalit.com",
    password: "Test12345!",
    twoFactorCode: "222222",
};

export default config;
