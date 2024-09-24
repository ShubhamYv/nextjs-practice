import axios from "axios";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error in fetching products:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
