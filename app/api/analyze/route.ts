import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(request: Request) {
  try {
    const { reportData } = await request.json();

    if (!reportData) {
      return NextResponse.json({ error: 'Report data is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `
      You are an expert safety and compliance auditor. 
      Analyze the following data and provide a professional, concise summary of safety risks, 
      compliance violations, and actionable recommendations.
      
      DATA:
      ${reportData}
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ analysis: text });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate compliance report' }, 
      { status: 500 }
    );
  }
}