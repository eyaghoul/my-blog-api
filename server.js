//step2
const express = require('express');
const app =express();
const PORT = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.json({message: 'Hello iam a blog api'});
});
//step3
const articles = [
  { id: 1, title: 'Bienvenue sur le blog', author: 'Admin' },
  { id: 2, title: 'Mon premier serveur Express', author: 'Aya' },
  { id: 3, title: 'Tester une API avec Postman', author: 'Aya' }
];

//step4
app.get('/api/articles/:id', (req, res) => {
    const id =Number(req.params.id);
    const article = articles.find(a => a.id === id);
    if(!article){
        return res.status(404).json({message: 'Article not found'});
    }
    res.json(article);
});
// step 5
app.get('/api/articles', (req, res) => {
    const {  author } = req.query;
    let result = articles;
    if (author) {
        result = articles.filter(article => article.author === author);
    }   
    res.json({ total: result.length, articles: result });
});
// step 6
let nextId = 4;
app.post('/api/articles', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }
    const newArticle = { id: nextId , title : title , author : author };
    nextId = nextId + 1;
    articles.push( newArticle) ;
    res.status(201).json({ message : 'Article created', article : newArticle }) ;
});
const applications = [
    {
        applicationName: "My Blog API",studentName: "Aya",releaseVersion: "1.0.0"},
    { 
        applicationName: "BPsmartDetector",studentName: "chadha",releaseVersion: "2.0.0"
    }
];
const users = [
    { id: 1, name: 'Aya', email: 'aya@example.com' },
    { id: 2, name: 'Omar', email: 'omar@example.com' },
    { id: 3, name: 'Sara', email: 'sara@example.com' }
];
// exercice 1
app.get('/about', (req, res) => {
    res.json({ applications });
    
});
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }   
    res.json(user);
});
app.get('/api/users', (req, res) => {
    const { name } = req.query;
    let result = users;
    if (name) {
        result = users.filter(user => user.name === name);
    }
    res.json({ total: result.length, users: result });
});
app.post('/contact', (req, res) => {
    const {email, message} = req.body ;
    if (!email || !message) {
        return res.status(400).json({ message: 'Email and message are required' });
    }  
    return res.status(200).json({ message: 'thank you , your message has been recieved', email, message });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// exercice 2 
const products = [
    { name :"Keyboard ", price : 45 } ,
    { name : "Monitor ", price : 320 } ,
    { name : "Mouse ", price : 25 }
    ];
const { name , price } = products[0];
console.log(`Product name: ${name}, Price: ${price}`);
const m = products.find(p=> p.name === "Monitor");
if (m) {
    console.log(`Price: ${m.price}`);
}
console.log(products.filter(p => p.price <100));
const withDiscount = products.map(p =>p.price*0.9);
console.log(withDiscount);



