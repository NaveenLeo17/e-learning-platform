import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const enrollmentSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    enrolledUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    { timestamps: true })

enrollmentSchema.plugin(mongooseAggregatePaginate)

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema)