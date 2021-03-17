import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
     name: String,
     email: String,
});

const AuthorInfo = mongoose.model('AuthorInfo', authorSchema);

export default AuthorInfo;