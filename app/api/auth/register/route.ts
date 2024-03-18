import { NextResponse } from 'next/server';
import prisma from '../../../lib/db'

export async function POST(request: any ) {
    const data = await request.json();

    return NextResponse.json(data);
}