const Task = require('../models/taskSchema');

const addTask =  async(req,res)=>{
try {
    const {name,description,startDate,deadline,state,owner,project}= req.body
    const newTask =await Task.create({
    name,
    description,
    startDate,
    deadline,
    state,
    owner,
    project


    })
    res.json(newTask);
    
} catch (error) {
    res.status(500).json({ message: error });
    
}




} 

const afficheTaskController = async (req,res)=>  {
    try {
        
          const listTasks = await  Task.find();
          res.status(200).json(listTasks)
           
    } catch (error) {
        res.status(500).json({message:error})
    }
 

}

const updateTaskController = async (req,res)=>{
try {
   const newTask = await Task.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).json(newTask)
    
} catch (error) {
    
}
res.status(500).json({message:error})

}

const deleteTaskController = async (req,res)=>{
try {
   const TaskDeleted = await Task.findByIdAndDelete(req.params.id);
   res.status(200).json(TaskDeleted)
    
} catch (error) {
    res.status(500).json({message:error}) 
}

}


module.exports={addTask,afficheTaskController,updateTaskController,deleteTaskController}