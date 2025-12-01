require("dotenv").config();
const app = require('./app'); //Change if app is inside folder

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
