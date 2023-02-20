import mongoose from 'mongoose';
import { userSchema } from '../model/User';


let uri: any = process.env.MONGODB_URI

if (!uri) {
  throw 'Please define the MONGODB_URI environment variable inside .env.local'

}

//! is needed?
const connection: any = {} /* creating connection object*/


export const connectToDatabase = (next: any) => async (req: any, res: any) => {//middleware


  //! is needed?
  if (connection.isConnected) {
    // Use current db connection
    console.log("cuurent conn");
    return next(req, res);
  }

  const client: any = await mongoose.connect(uri, <any>{
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    useNewUrlParser: true
  });
  connection.isConnected = client.connections[0].readyState

  return next(req, res);

}
