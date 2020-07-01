const Info = require('../models/info.model.js');

// Create and Save a new info
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "info content can not be empty"
        });
    }

    // Create a info
    const info = new Info({
        title: req.body.title || "Untitled info",
        content: req.body.content
    });

    // Save info in the database
    info.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the info."
        });
    });
};

// Retrieve and return all infos from the database.
exports.findAll = (req, res) => {
    Info.find()
        .then(infos => {
            res.send(infos);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving infos."
        });
    });
};

// Find a single info with a infoId
exports.findOne = (req, res) => {

    Info.findById(req.params.infoId)
        .then(info => {
            if(!info) {
                return res.status(404).send({
                    message: "Info not found with id " + req.params.infoId
                });
            }
            res.send(info);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Info not found with id " + req.params.infoId
            });
        }
        return res.status(500).send({
            message: "Error retrieving info with id " + req.params.infoId
        });
    });

};

// Update info identified by the infoId in the request
exports.update = (req, res) => {

    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Info content can not be empty"
        });
    }

    // Find info and update it with the request body
    Info.findByIdAndUpdate(req.params.infoId, {
        title: req.body.title || "Untitled Info",
        content: req.body.content
    }, {new: true})
        .then(info => {
            if(!info) {
                return res.status(404).send({
                    message: "Info not found with id " + req.params.infoId
                });
            }
            res.send(info);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Info not info with id " + req.params.infoId
            });
        }
        return res.status(500).send({
            message: "Error updating info with id " + req.params.infoId
        });
    });

};

// Delete a info with the specified infoId in the request
exports.delete = (req, res) => {

    Info.findByIdAndRemove(req.params.infoId)
        .then(info => {
            if(!info) {
                return res.status(404).send({
                    message: "Info not found with id " + req.params.infoId
                });
            }
            res.send({message: "Info deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Info not found with id " + req.params.infoId
            });
        }
        return res.status(500).send({
            message: "Could not delete info with id " + req.params.infoId
        });
    });

};