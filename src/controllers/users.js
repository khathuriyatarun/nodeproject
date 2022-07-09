const User = require("../models/users");
const Role = require("../models/role");
const Company = require("../models/company");
const Tenure = require("../models/workExperience");
const bcrypt = require("bcryptjs");


exports.addUser = async (req, res, next) => {
    let flag = false;
    let user = req.body;

    //check if user alrady exists using emailId
    await User.find({
        'email' : user.email
    }).then(async data => {
        if(data.length > 0){
            flat = true;
            return res.status(400).json({
                error: "User already exists"
            });
        }
    })

    //check if employeeId already exists
    await User.find({
        'employeeId' : user.employeeId
    }).then(async data => {
        if(data.length > 0){
            flat = true;
            return res.status(400).json({
                error: "Employee Id already exists"
            });
        }
    })

    if(!flag){

        //search for companyId
        await Company.findOne({
            'name': user.company
        }).then(async data => {
            if(data){
                user.company = data._id
            }
        });

        //search for roleId
        await Role.findOne({
            'name': user.role
        }).then(async data => {
            if(data){
                user.role = data._id
            }
        });

        bcrypt.hash(user.password, 10, async (err, hash) => {
            user.password = hash;
            const newUser = new User(user);
            await newUser
            .save()
            .then( async (data) => {
                //insert work experience
                const temp = {
                    tenure: user.tenure,
                    user: data._id,
                    company: user.company
                }

                const newTenure = new Tenure(temp);
                await newTenure
                .save()
                .then(() => {
                    res.send('User Added Successfully!')
                })
            })
            .catch((err) => res.status(400).send(err));
        });
    }
};

exports.loginUser = async (req, res, next) =>{
    await User.findOne({
        'email': req.body.email
    }).then(async user => {
        if(user){
            //check for password using bcrypt's compare method
            bcrypt.compare(req.body.password, user.password, async function(err, same){
                if(same & user.isActive){
                    res.send({
                        user: user
                    });
                }else if(user.isActive){
                    res.send("Invalid password");
                }else{
                    res.send("User is Inactive");
                }
            })
        }else{
            res.send("Invalid Email");
        }
    })
}

exports.fetchUserById = async (req, res, next) => {
    await User.findOne({
        _id : req.params.id
    }).populate("company")
    .populate("role")
    .then((item) => res.send(item))
    .catch((err) => res.status(400).send(err));
}


