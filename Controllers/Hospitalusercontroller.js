import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Hospital_users from "../models/HospitalusersModel.js";



dotenv.config();
//Add a Hospital_users
export async function addHospitaluser(req, res) {
    try {
        bcrypt.hash(req.body.password, 10).then(async(hash) => {
            let Hospital_usersObj = {
                Hospital_Name: req.body.Hospital_Name,
                emailaddress: req.body.emailaddress,
                password: hash
            }
            let hospital = await Hospital_users.create(Hospital_usersObj);
            if (hospital) {
                res.render('doctor-dashboard')
                    //     res.status(200).json({
                    //         success: true,
                    //         data: Hospital_users
                    //     })
                    // } else {
                    //     res.status(200).json({
                    //         success: true,
                    //         message: "User could not be added successfully"
                    //     })

            }
        });

    } catch (err) {

        console.log(err);
        res.status(500).json({

            success: false,
            message: "Opps.....Something is wrong"
        })
    }
}


//View A Hospital_users
export async function ViewUser(req, res) {
    try {
        let Hospital_users = await Hospital_users.findAll({ where: { Hospitalusers_id: req.params.id } });
        if (Hospital_users) {
            res.status(200).json({
                success: true,
                message: 'User Records retrieved Sucessfully',
                data: Hospital_users
            })
        } else {
            res.json({
                success: true,
                message: 'No Hospital_users records found'
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({

            success: false,
            message: "Opps!Something is wrong"
        })

    }

}

//View All Hospital_userss
export async function ViewAllUsers(req, res) {
    try {
        let allusers = await Hospital_users.findAll();
        if (allusers) {
            res.status(200).json({
                success: true,
                message: 'User records retrived successfully',
                data: allusers
            })
        } else {
            res.json({
                success: true,
                message: 'No Hospital_users records found'
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({

            success: false,
            message: "Opps.....Something is wrong"
        })

    }
}

//SignIn
export async function SignIn(req, res) {
    //Get a Hospital_users With email Address
    //Ensure that their password is correct
    //Create a JWT for them.(For Authenticating Other API requests)
    try {
        let Hospital_users = await Hospital_users.findOne({ where: { emailaddress: req.body.emailaddress } })
        if (!Hospital_users) {
            return res.status(401).json({
                status: false,
                message: "Authentication failed:User with email address not found"
            })
        }
        bcrypt.compare(req.body.password, Hospital_users.password).then(response => {
            if (!response) {
                res.render('login')
                    //     return res.status(401).json({
                    //         status: false,
                    //         message: "Authentication failed:Incorrect Password"
                    //     })

            }
            let authToken = jwt.sign({ emailaddress: Hospital_users.emailaddress, Hospital_users_id: Hospital_users.User_id }, process.env.AUTH_KEY, { expiresIn: "1hr" });
            if (authToken) {
                res.render('doctor-dashboard')

            }
            // return res.status(200).json({
            //     status: true,
            //     message: "User authentication successful",
            //     Hospital_users: { fullname: Hospital_users.fullname, emailaddress: Hospital_users.emailaddress, Hospital_users_id: Hospital_users.User_id },
            //     token: authToken,
            //     expiresIn: 3600
            // })

        })

    } catch (err) {
        console.log(err)
        res.status(500).json({

            success: false,
            message: "Opps!Something is wrong"
        })
    }

}