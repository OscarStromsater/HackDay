const express = require('express');
const app = express();


PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`running on ${PORT}`));