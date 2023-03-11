import mongoose from 'mongoose'
import { assign } from 'nodemailer/lib/shared';
const { Schema } = mongoose;

const TaskSchema = new Schema(
    { 
        title: String,
        description: String,
        status: String,
        priority: String,
        dueDate: Date,
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        assignedTo: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    { timestamps: true }
);

const Task = mongoose.model('Task', TaskSchema)

export default Task