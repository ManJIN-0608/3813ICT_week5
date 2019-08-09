const users = [
    {'email':'abc@com.au', 'pwd':'123', 'username':'John', 'birthday':'08/06/1998', 'age':21},
    {'email':'abd@com.au', 'pwd':'123', 'username':'Emma', 'birthday':'08/06/1998', 'age':21},
    {'email':'abe@com.au', 'pwd':'123', 'username':'Zoe', 'birthday':'08/06/1998', 'age':21}
];

module.exports = function(app,path) {
    app.post('/api/login', function(req,res) {
        
      console.log("post route is hitted");
        if(!req.body) {
            return res.sendStatus(400);
        }
            var customer = {};
            
            customer.valid = false;
            customer.email = '';
            customer.username = '';
            customer.birthday = '';
            customer.age = 0;
        for (let i=0; i<users.length; i++) {
            if (req.body.email == users[i].email && req.body.password == users[i].pwd) {
                customer.valid = true;
                customer.email = users[i].email;
                customer.username = users[i].username;
                customer.birthday = users[i].birthday;
                customer.age = users[i].age;
            }
        }
        console.log(customer);
        res.send(customer);
    });
}