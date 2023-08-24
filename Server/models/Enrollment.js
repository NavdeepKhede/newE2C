import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema({
    branch: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        default: 1,
    },
}, { timestamps: true });

const Enrollment = mongoose.model("Enrollment", EnrollmentSchema);
export default Enrollment;