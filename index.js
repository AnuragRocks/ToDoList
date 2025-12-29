const express =require ('express');
const path =require ('path');
const app= express();
const fs = require('node:fs');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function (req, res){

    fs.readdir('D:\\MERN STACK TUT\\Random yt channels\\revision\\practice\\files', function (error, files){
            res.render("index", {files: files});

    })
})

app.post("/create", function (req, res){

    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(error) {
        if (error) {
            return res.status(500).send("Error writing file");
        }
        res.redirect("/");
    });
})
app.get("/file/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function (error, data) {
        if (error) {
            return res.status(404).send("File not found");
        }
         res.render("show", { filename: req.params.filename, filedata: data });      });
});

app.get("/edit/:filename", function (req,res){
    res.render("edit", {filename: req.params.filename});
})

app.post("/edit", function (req, res){
    // Remove .txt from new name if present, then add it back
    const newName = req.body.new.replace(/\.txt$/, '');
    
    fs.rename(`./files/${req.body.previous}`, `./files/${newName}.txt`, function (error){
        if (error){
            console.log(error);
            return res.status(500).send("Error renaming file");
        }
        res.redirect("/");
    });
});


app.listen(3000, function (){
    console.log("server is running on port 3000");  
})