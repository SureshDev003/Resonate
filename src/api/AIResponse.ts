
import { useState } from "react";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = "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";

export const useAIResponse = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAIResponse = async (userInput: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          // "HTTP-Referer": "<YOUR_SITE_URL>",
          // "X-Title": "<YOUR_SITE_NAME>",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [{ role: "user", content: userInput }]
        }),
      });

      const data = await res.json();
      console.log(data);
      
      if (data.choices && data.choices.length > 0) {
        setResponse(data.choices[0].message.content);
        // console.log(data.choices[0].message.content);
        return data.choices[0].message.content; // ✅ Return response
      } else {
        setError("No response from AI.");
        return null;
      }
    } catch (err) {
      setError("Error fetching response.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchAIResponse };
};
