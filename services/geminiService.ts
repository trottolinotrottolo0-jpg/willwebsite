
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCoachingAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Sei un Performance Coach di alto livello. Il tuo obiettivo è fornire consigli brevi, motivanti e scientificamente fondati per migliorare la produttività, la salute mentale e le performance fisiche. Rispondi in italiano in modo professionale e ispiratore.`,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });
    return response.text || "Spiacente, non sono riuscito a generare un consiglio in questo momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "C'è stato un errore nel connettersi al tuo assistente AI. Riprova più tardi.";
  }
};
