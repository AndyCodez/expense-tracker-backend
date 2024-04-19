import { initializeApp } from "./initializeApp.mjs";

const app = initializeApp();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});