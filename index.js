const express=require("express");
const mongoose=require("mongoose");
const app=express();
const connect=()=>{
    return mongoose.connect("mongodb+srv://Aman123:aman@cluster0.v2cb4.mongodb.net/c2eav?retryWrites=true&w=majority")
}
const user= new  mongoose.Schema({
    firstName:{type:String,required:true},
    middleName:{type:String,required:false},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    address:{type:String,required:true},
    gender:{type:String,required:true},
    
}
,
{
    versionKey:false,
    timestamps:true,
})
const User=mongoose.model("users",user);

app.get("/users",async(req,res)=>{
    try{
        const users=await Users.find().lean().exec();
        res.status(200).send(user)
    }catch(err){
       return res.status(500).send({messege:err.messege})
    }
});
app.post("/users",async(req,res)=>{
    try{
        const user=await user.create(req.body).lean().exec();
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send({messege:err.messege})
    }
});
app.patch("/users",async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.body,{new:true}).lean().exec();
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send({messege:err.messege})
    }
})
app.delete("/users",async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.body,{new:true}).lean().exec();
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send({messege:err.messege})
    }
})
// =========================
const branchDetail= new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC:{type:String,required:true},
    MICR:{type:Number,required:true},   
},
{
    versionKey:false,
    timestamps:true,
}
);
const BranchDetail=new mongoose.model("BranchDetail",branchDetail)

const masterAccount= new mongoose.Schema({
    balance:{type:Number,required:true},
  
    
},
{
    versionKey:false,
    timestamps:true,
}
);
const MasterAccount=new mongoose.model("MasterAccount",masterAccount)
const savingsAccount= new mongoose.Schema({
    account_number:{type:String,required:true,unique:true},
    address:{type:String,required:true},
    
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},
    
},
{
    versionKey:false,
    timestamps:true,
}
);
const SavingsAccount=new mongoose.model("SavingsAccount",savingsAccount);
const fixedAccount= new mongoose.Schema({
    account_number:{type:String,required:true,unique:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},

    
},
{
    versionKey:false,
    timestamps:true,
}
);
const FixedAccount=new mongoose.model("FixedAccount",fixedAccount)



app.listen(4000,async()=>{
    try{
       console.log("I am listing port 4000")
    }catch(err){
        console.log("Something went wrong")
    }
});