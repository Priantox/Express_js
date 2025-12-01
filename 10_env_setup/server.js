require("dotenv").config();
const app = require('./app'); //Change if app is inside folder
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
