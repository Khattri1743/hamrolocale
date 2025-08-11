const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { Name, Email, Phone_Number, Quantity, Receive_Location, Order_Date } = req.body;

    const filePath = 'https://docs.google.com/spreadsheets/d/1aeETJT5M8X9--fo2BNbe4g2OAa6pcm6dDhtihvFA62U/edit?gid=0#gid=0';
    const data = `${Name},${Email},${Phone_Number},${Quantity},${Receive_Location},${Order_Date},${new Date().toLocaleTimeString()}\n`;

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, 'Name,Email,Phone_Number,Quantity,Receive_Location,Order_Date,Order_Time\n');
    }

    fs.appendFileSync(filePath, data);

    res.send('Order Saved Successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
