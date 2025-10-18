import mongoose,{Schema, Types} from 'mongoose'
const userSchema=new Schema(
    {
        name:String,
        email:{type:String,unique:true},
        password:String,
        branch:String,
        year:Number,
        role:{type:String,enum:["student","faculty","alumni","admin"],default:"student"},
        uploadedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],
        upvotedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],

    },{timestamps}
)

export const User=mongoose.model('User',userSchema);