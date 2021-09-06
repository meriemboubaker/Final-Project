const express = require ('express');
const router = express.Router();
const authMiddleware = require ('../middleware/authMiddleware')
const{addTask,afficheTaskController,updateTaskController,deleteTaskController} = require ('../controllers/taskController')

router.post('/addtask',authMiddleware,addTask)

router.get('/listTasks',authMiddleware,afficheTaskController)

router.put('/updateTask/:id',authMiddleware,updateTaskController)

router.delete('/deleteTask/:id',authMiddleware ,deleteTaskController)


module.exports = router;