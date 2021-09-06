const Project = require('../models/projectSchema');

const addProject = async (req, res) => {
  try {
    const { description, name ,startDate,deadLine,state} = req.body;
    const newProject = await Project.create({ name, description,startDate,deadLine,state, owner: req.personId });
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error)
  }
};

const afficheProjectController = async (req,res)=>  {
    try {
        
          const listProjects = await  Project.find();
          res.status(200).json(listProjects)
           
    } catch (error) {
        res.status(500).json({message:error})
    }
 

}

const updateProjectController = async (req,res)=>{
try {
   const newProject= await Project.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).json(newProject)
    
} catch (error) {
    
}
res.status(500).json({message:error})

}

const deleteProjectController = async (req,res)=>{
try {
   const projectDeleted =await Project.findByIdAndDelete(req.params.id);
   res.status(200).json(projectDeleted)
    
} catch (error) {
    res.status(500).json({message:error}) 
}

}


module.exports = { addProject,afficheProjectController,updateProjectController,deleteProjectController};