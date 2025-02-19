import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { useAIResponse } from "../api/AIResponse";
import ReactMarkdown from 'react-markdown';



type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

const AIBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const { response, error, fetchAIResponse } = useAIResponse();

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Append user input to messages
    const userMessage: Message = {
      id: `${Date.now()}`,
      text: input,
      isBot: false,
    };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    const result = await fetchAIResponse(userMessage.text);
    console.log("This is the whole data:", result);

    const botMessage: Message = {
      id: `${Date.now()}`,
      text: result || response || error || "No response from AI.",
      isBot: true,
    };

    setMessages((prev) => [...prev, botMessage]);
    

    
  };

  return (
    <div className="max-w-2xl mx-auto h-[calc(100vh-8rem)]">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot ? "bg-gray-100" : "bg-blue-600 text-white"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {message.isBot ? "AI Bot" : "You"}
                  </span>
                </div>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBot;
