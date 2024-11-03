import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send('server is ready');
});

const port = process.env.PORT || 3001

app.get('jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"a joke",
            content:"First joke"
        },
        {
            id:2,
            title:"a joke",
            content:"second joke"
        }
    ];
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`server at ${port}`);
});