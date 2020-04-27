let express = require('express')

let app = express()

let data = require('./public/employees.json')


app.get('/employees', (req, res) => {
    if(!data){
        res.status(404).send(`Couldn't find employee.`)
    }

    res.send(data)
})

app.get('/employees/:id', function(req, res){
    const sData = data.employees.find(function(employees){
            console.log(employees.id)

            return parseInt(req.params.id) === employees.id
            //partseInt turning string into number

    })

    if(!sData){
        res.status(404).send(`Employee was not found`)
    }

    res.send(sData)

    
})



const port = process.env.PORT || 3000;
//cant upload to github because env is secure
//3000 is local host; can go up to 8080 on server
app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})
//very imprtant tells server to listen out for your code
