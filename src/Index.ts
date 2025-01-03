// src/index.ts
import { config } from 'dotenv';
import { createInstance } from './DynamicClassLoader';

config();

const className = process.env.CLASS_NAME || 'BaseClass';
const instance = createInstance(className, 'John Doe');

console.log(instance.greet());