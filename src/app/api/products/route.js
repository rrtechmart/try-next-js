import { NextResponse } from "next/server"
import db from "@/db.json";

export const GET =(request)=>{
    // console.log(request.cookies.get(""), request.headers.get("x-forwarded-host"))

    const {searchParams} = new URL(request.url);
    const categoryId = searchParams.get('categoryId')
    let products = db.products;
    if(categoryId){
        products = products.filter((product)=> product.categoryId === +categoryId)
    }
    
    return NextResponse.json(products)
}

export const PUSH =async (request)=>{
    const body = await request.json()
    db.products.push(body);
    return NextResponse.json(products)
}