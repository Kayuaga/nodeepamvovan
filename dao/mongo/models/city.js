import mongoose from 'mongoose';
import { CitySchema } from '../schema';

export default mongoose.model('City', CitySchema);