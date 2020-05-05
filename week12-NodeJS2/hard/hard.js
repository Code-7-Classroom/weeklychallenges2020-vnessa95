//post http://localhost:3001/employees
//get  http://localhost:3001/employees
//get  http://localhost:3001/employees/1 (1-10)
//put //couldnt get to work
//delete  //couldnt get to work






let express = require('express')

let app = express()

let data = require('./public/employees.json')



app.post("/employees", function (req, res) {
    const sData = {
      id: data.employees.length + 1,
      name: req.body.name,
      salary: req.body.salary,
      job: req.body.job
    };
    if (!sData) {
      res.status(404).send(`Couldnt add student`);
    }
  
    data.employees.push(sData);
  
    res.status(200).send(sData);
  
  });


app.get('/employees', (req, res) => {
    if(!data){
        res.status(404).send(`Couldn't find employee.`)
    }

    res.send(data)
});

app.get('/employees/:id', function(req, res){
    const sData = data.employees.find(function(employees){
            console.log(employees.id)

            return parseInt(req.params.id) === employees.id
            //partseInt turning string into number

    })

    if(!sData){
        res.status(404).send(`We're sorry, employee was not found`)
    }

    res.send(sData)

    
});



    



const port = process.env.PORT || 3001;
//cant upload to github because env is secure
//3000 is local host; can go up to 8080 on server
app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})
//very imprtant tells server to listen out for your code
