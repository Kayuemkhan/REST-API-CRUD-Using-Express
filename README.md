
**<u>Initializing Express:**

    const express = require('express');
    
    const mysql = require('mysql');

 **Create connection**
Turn on your xampp ! And write these lines for 

    const db = mysql.createConnection({
    
    host : '127.0.0.1',
    
    user : 'root',
    
    database : 'nodemysql'
    
    });
    
    //connect
    
    db.connect((err) =>{
    
    if(err){
    
    throw err;
    
    }
    
    console.log("Mysql Connected")
    
    })
    
    const app = express();

  **Creating Database** 

    app.get('/createdb', (req,res)=>{
    
    let sql = "CREATE DATABASE nodemysql"
    
    db.query(sql,(err,result)=>{
    
    if(err) throw err;
    
    console.log(result)
    
    res.send("Database Created")
    
    })
    
    })

**Create Table**

    app.get('/createPostTable',(req,res)=>{
    
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT , title VARCHAR(255) , body VARCHAR(255), PRIMARY KEY (id) )';
    
    db.query(sql,(err,result)=>{
    
    if(err) throw err
    
    console.log(result)
    
    res.send("posts table created ... ")
    
    })
    
    })

 **Insert post 1**

    app.get('/addpost1/:title/:body',(req,res) =>{
    
    let posts = {title: req.params.title ,body: req.params.body};
    
    let sql = 'INSERT INTO posts SET ? ' ;
    
    let query = db.query(sql,posts,(err,result) =>{
    
    if(err) throw err
    
    console.log(result.insertId)
    
    res.json({ status: 200 , message: `post is successfully inserted at ${result.insertId} ` ,posts})
    
    })
    
    })

 **Fetch all posts**

    app.get('/getallposts',(req,res) =>{
    
    let posts = {title: 'post1',body:'this is post number 1 '};
    
    let sql = 'SELECT * FROM posts ' ;
    
    let query = db.query(sql,posts,(err,result) =>{
    
    if(err) throw err
    
    res.json({ status: 200 , message: "All posts" , data:result})
    
    })
    
    })

**Fetch post By ID**

    app.get('/getpost/:id',(req,res)=>{
    
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    
    let query = db.query(sql,(err,result) => {
    
    if(err) throw err
    
    console.log(result)
    
    res.json({ status: 200 , data:result})
    
    })
    
    })

**Update post**

    app.get('/updatepost/:id', (req, res) => {
    
    let newTitle = 'Updated Title';
    
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    
    let query = db.query(sql, (err, result) => {
    
    if(err) throw err;
    
    console.log(result);
    
    res.status(200).json({status:200,data:result, message:'Post updated...'});
    
    });
    
    });

 **Delete post**

    app.get('/deletepost/:id', (req, res) => {
    
    let newTitle = 'Updated Title';
    
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    
    let query = db.query(sql, (err, result) => {
    
    if(err) throw err;
    
    console.log(result);
    
    res.send('Post deleted...');
    
    });
    
    });
    
    app.listen('3000', ()=>{
    
    console.log("Server Started on port 3000");
    
    })

