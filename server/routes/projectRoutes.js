const express = require ('express');
const router = express.Router();
const authMiddleware = require ('../middleware/authMiddleware')
const{addProject,afficheProjectController,updateProjectController,deleteProjectController} = require ('../controllers/projectController')

router.post('/addproject',authMiddleware,addProject)

router.get('/listProjects',authMiddleware,afficheProjectController)

router.put('/updateProject/:id',authMiddleware,updateProjectController)

router.delete('/deleteProject/:id',authMiddleware ,deleteProjectController)



module.exports = router;