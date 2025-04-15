const express = require("express");
const app = express();

let port = 8080;

// app.use((req, res)=>{
//     // console.log(req)
//     // res.send("this is basic response")
//     res.json({
//         name:"apple",
//         color:"red"
//     })
//     // res.send("<h1>Hello</h1>")
// })

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    console.log(`Hi ${username}, your id is ${id}`)
    res.status(200).send("Hola").status(200)
})

app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.status(200).send("search for anything")
    }
    res.send(`search : ${q}`)
})


app.listen(port, () => {
    console.log(`app listening on ${port}`);
})