import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    lastModifiedDate: { 
        type: Date 
    }
});

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastModifiedDate: { 
        type: Date 
    }
});

export const CitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    country: String,
    capital: Boolean,
    location: {
        latitude: {
            type: Number,
            min: 0,
            max: 180
        },
        longitude: {
            type: Number,
            min: 0,
            max: 180
        }
    },
    lastModifiedDate: { 
        type: Date 
    }
});

UserSchema.pre('save', beforeSave);
ProductSchema.pre('save', beforeSave);
CitySchema.pre('save', beforeSave);

function beforeSave(next){
    const now = new Date();
    this.lastModifiedDate = now;
    if (!this.lastModifiedDate) {
      this.lastModifiedDate = now;
    }
    next();
}