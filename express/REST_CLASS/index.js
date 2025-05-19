const express = require('express');
const app = express();

const port = 3000;
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    maxAge: 3600,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('assets', path.join(__dirname, 'assets'));

let posts = [
    {
        id: 1,
        username: 'user1',
        content: 'This is the content of post 1',
    },
    {
        id: 2,
        username: 'user2',
        content: 'This is the content of post 2',
    },
    {
        id: 3,
        username: 'user2',
        content: 'This is the content of post 3',
    },
];

app.get('/posts', (req, res) => {
    res.json(posts);
}
);

app.get('/posts/:username', (req, res) => {
    const post = posts.find(p => p.username === req.params.username);
    // const username = req.params.username;
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
}
);


app.post('/posts', (req, res) => {
    const post = {
        id: posts.length + 1,
        title: req.body.username,
        content: req.body.content,
    };
    posts.push(post);
    res.redirect(201, '/posts');
}
);

app.patch('/posts/:username', (req, res) => {
    const post = posts.find(p => p.username === req.params.username);
    if (!post) return res.status(404).send('Post not found');
    post.content = req.body.content;
    res.json(post).status(200);
}
);

app.delete('/posts/:username/:id', (req, res) => {
    const username = posts.find(p => p.username === req.params.username);
    if (!username) return res.status(404).send('User not found');

    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('Post not found');

    posts.splice(postIndex, 1);
    res.json(posts).status(204);
}
);



app.listen(port, () => {
    console.log(`Server is running at http://${require('ip').address()}:${port}`);
}
);
