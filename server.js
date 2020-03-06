var express = require('express');
    mongoose = require('mongoose');
    app = express();
     mongoose.connect('mongodb+srv://ankur:ankur@1234@cluster0-4vjru.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},function(error,result){
      if(error){
            console.log('error',error);
      }else{
           console.log("server connect")
      }
})

app.get('/',function(req,res){
       res.send('ok test')
})

app.listen("8000",function(){
       console.log("server run!")
})