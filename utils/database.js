import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(
          process.env.NEXT_PUBLIC_MONGO_DB_URI,
          {
            dbName: 'share_prompt',
            // useNewUrlParams: true,   //this function has been deprecated
            useUnifiedTopology: true,
          }
        );
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

