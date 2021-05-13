const StudentGroup = require('../models/studentGroup')

// Get Id of Student Group
exports.getGroupById = (req, res, next, id) => {
    try {
        StudentGroup.findById(id).exec((err, group) => {
            if(err) {
                return res.status(400).json({
                    error: "StudentGroup not found"
                })
            }
            req.group = group
            next()
        })
    } catch(error) {
        console.log(error)
    }
}

// Create Student Group
exports.create = async (req, res) => {
    try{
        const group = await new StudentGroup(req.body)
        group.save((err, group) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Group not able to save"
                })
            }
            res.json(group)
        })
    }catch(err){
        console.log(err)
    }
}

//Get Student Group data
exports.getGroup = (req, res) => {
    try{
	   return res.json(req.group) 
    } catch(error) {
        console.log(error)
    }
}

//Get All Student Group Data
exports.getAllGroup = (req, res) => {
    try{
        StudentGroup.find().exec((err, groups) => {
            if(err) {
                return res.status(400).json({
                    error: "No groups found"
                })
            }
            res.json(groups)
        })
    } catch(error){
        console.log(error)
    }
}

//Update Student Group Data
exports.updateGroup = async (req, res) => {
    try{
        const studentGroup = await req.group
        studentGroup._id = req.body.id
        studentGroup.name = req.body.name
        studentGroup.save((err, group) => {
            if(err) {
                return res.status(400).json({
                    error: "Student Group not able to update"
                })
            }
            res.json(group)
        })
    }catch(err){
        console.log(err)
    }
}

//Delete Student Group Data
exports.deleteGroup = (req, res) => {
    try{
        let studentGroup = req.group
        StudentGroup.deleteOne(studentGroup, (err, group) => {
            if(err) {
                return res.status(400).json({
                    error: "No year found"
                })
            }
            if(group.ok === 1) {
                StudentGroup.find().exec((err, groups) => {
                    if(err) {
                        return res.status(400).json({
                            error: "No groups found"
                        })
                    }
                    res.json(groups)
                })
            }
        })
    } catch(error) {
        console.log(error)
    }
}