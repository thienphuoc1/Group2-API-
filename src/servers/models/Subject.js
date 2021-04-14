import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const subjectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subName: {
        type: String,
        required: true,
    },
    subID: {
        type: String,
        required: true,
    },
    totalPeriod: {
        type: Number,
        require: true,
    },
    subType: {
        type: String,
        require: true,
    }
});

export default mongoose.model('Subject',subjectSchema);