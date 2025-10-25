import express from 'express'

const app=express();

const PORT = process.env.PORT ||4000;


app.get('/',(req,res)=>{
    res.send('server Ready for boom')
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"Scarecrow Award",
            joke:"Why did the scarecrow win an award? Because he was outstanding in his field!"

        },
        {
            id:2,
            title:"High Eyebrows",
            joke:"I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
            id:3,
            title:"Skeletons",
            joke:"Why don’t skeletons fight each other? They don’t have the guts."
        }
    ]

    res.send(jokes);
});


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})


