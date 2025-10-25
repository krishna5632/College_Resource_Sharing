import mongoose,{Schema, Types} from 'mongoose'

import bcrypt from "bcrypt"
const userSchema=new Schema(
    {
        username:{type:String,required:true},
        email:{type:String,unique:true},
        password:String,
        branch:String,
        year:Number,
        role:{type:String,enum:["student","faculty","alumni","admin"],default:"student"},
        avatar: { type: String }, // ✅ to store Cloudinary image URL
        uploadedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],
        upvotedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],
        refreshToken:{type:String}

    },{timestamps:true}
) 

// hash the password before store using bycrpt

// define pre-save hook 
userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        return next;
    }
    this.password=await bcrypt.hash(this.password,10)

    next()
})


// here we define methods for campare user enter passwor with user actual password store in database
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}


// jwt is the beare tooken --beeare mean which one has this tooken we treat as valid user 

userSchema.methods.generateAccessToken= async function () {

    // jwt required two things 
    //header: Algorithm and token type.-
    //  Payload: Contains data (e.g., user ID, email). Never put sensitive info here.
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRES_IN
        }
    )
}
userSchema.methods.generateRefreshToken= async function () {
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRES_IN
        }
    )
}

export const User=mongoose.model('User',userSchema);