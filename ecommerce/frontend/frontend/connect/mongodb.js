import mongoose, { models } from 'mongoose';

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://ecommerce:ecommerce123@cluster0.lgutpoh.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw error;
  }
}

export default connectToDatabase;
