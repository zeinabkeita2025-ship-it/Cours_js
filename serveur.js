const express = require('express');

const qrcode = require('qrcode');

const cors = require('cors');
// declaration 
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


app.post('/generer', async(req, res) =>{
    const link =  req.body.url;

    const qr = await qrcode.toDataURL(link);
    res.json({
        qrCode : qr 
    });
});
    app.listen(3000, ()=>{
        console.log("demarre sur le port 3000");
    });

