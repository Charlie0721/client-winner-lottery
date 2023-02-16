import axios from './axios'
import { AxiosResponse } from 'axios'
import { INumber } from '@/interface/numbers.interface'


export const postNumbers= async (number:INumber)=>axios.post('/numbers',number)