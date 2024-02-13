import mongoose from 'mongoose';

const UserSchema = await new mongoose.Schema(
  {
    name: String,
    lastName: {
      type: String,
      default: 'type your last name here',
    },
    email: String,
    password: String,
    city: {
      type: String,
      default: 'my city',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;

  return obj;
};
export default mongoose.model('user', UserSchema);
