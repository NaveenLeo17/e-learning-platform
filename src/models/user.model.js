import mongoose, { Schema } from "mongoose"
import PasswordValidator from "password-validator"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: function (password) {
                // Use a password validation library to check the strength of the password
                const schema = new PasswordValidator();
                schema
                    .is().min(8) // Minimum length 8
                    .is().max(100) // Maximum length 100
                    .has().uppercase() // Must have uppercase letters
                    .has().lowercase() // Must have lowercase letters
                    .has().digits() // Must have digits
                    .has().symbols(); // Must have symbols

                // Return true if the password meets the criteria defined by the schema
                return schema.validate(password);
            },
            message: props => `${props.value} is not a valid password. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one symbol.`
        }
    },
    avatar: {
        type: String,
        required: true
    }
},
    { timestamps: true })

export const User = mongoose.model("User", userSchema)