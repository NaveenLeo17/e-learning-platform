import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const courseSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        enum: ['Programming', 'Web Development', 'Data Science', 'Design', 'Business', 'Health & Fitness', 'Language Learning', 'Other'],
        required: true
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    popularity: {
        type: Number,
        min: 0,
        default: 0
    }
},
    { timestamps: true })

courseSchema.plugin(mongooseAggregatePaginate)

export const Course = mongoose.model("Course", courseSchema)


