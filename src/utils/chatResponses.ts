
type ResponseCategory = {
  replies: string[];
  emojis: string[];
};

export const casualResponses: Record<string, ResponseCategory> = {
  greeting: {
    replies: [
      "Hey you! How's your day going?",
      "Hey babe! What's on your mind?",
      "Well hello there! Nice to hear from you",
      "Hey sweetie! How can I make your day better?",
    ],
    emojis: ["😘", "💋", "😊", "💖"]
  },
  
  availability: {
    replies: [
      "I've got some time [timeframe]! Want me to save you a spot?",
      "[timeframe] works perfect for me! Want to set something up?",
      "I can squeeze you in [timeframe]! What do you say?",
      "My schedule's open [timeframe]! Want to make it happen?",
    ],
    emojis: ["😉", "💫", "✨", "💖"]
  },
  
  services: {
    replies: [
      "I'm all about giving you a good time! Want to know more about what I offer?",
      "I do relaxed, one-on-one sessions built around what YOU like. Got something in mind?",
      "I offer personalized sessions to make you feel amazing. Want the full rundown?",
      "Think relaxed vibes and personal attention. Want me to tell you more?",
    ],
    emojis: ["😉", "💋", "✨", "💫"]
  },
  
  compliment: {
    replies: [
      "Aww, you're making me blush! You're not so bad yourself",
      "Thanks babe! You sure know how to make someone feel special",
      "You're too sweet! I bet you say that to all the girls",
      "Look who's talking! You're quite the charmer yourself",
    ],
    emojis: ["😘", "💋", "💖", "✨"]
  },
  
  rates: {
    replies: [
      "Let's talk about what you're looking for first, then I can give you the details",
      "Depends what kind of session you're after, babe. What did you have in mind?",
      "Tell me what you're interested in, and I'll give you all the info",
      "Let's figure out what you're looking for, then we can talk specifics",
    ],
    emojis: ["😉", "💫", "✨", "💋"]
  },
  
  boundary: {
    replies: [
      "Let's keep things respectful and fun, sweetie",
      "I'm all about good vibes and clear boundaries, babe",
      "How about we focus on having a good time within boundaries?",
      "Let's keep it classy and fun, yeah?",
    ],
    emojis: ["💋", "✨", "💖", "😘"]
  },
  
  default: {
    replies: [
      "Tell me more about what you're looking for, babe",
      "What kind of experience are you after, sweetie?",
      "I'm intrigued! What did you have in mind?",
      "Sounds interesting! Want to tell me more?",
    ],
    emojis: ["😘", "💋", "✨", "💖"]
  }
};

export const detectIntent = (message: string): keyof typeof casualResponses => {
  const lower = message.toLowerCase();
  
  if (lower.match(/^(hi|hey|hello|howdy|yo|hiya)/)) {
    return "greeting";
  }
  
  if (lower.includes("tonight") || lower.includes("available") || lower.includes("free") || 
      lower.includes("when") || lower.includes("schedule") || lower.includes("booking")) {
    return "availability";
  }
  
  if (lower.includes("service") || lower.includes("offer") || lower.includes("do you do") || 
      lower.includes("what can") || lower.includes("session")) {
    return "services";
  }
  
  if (lower.includes("beautiful") || lower.includes("gorgeous") || lower.includes("hot") || 
      lower.includes("pretty") || lower.includes("cute") || lower.includes("sexy")) {
    return "compliment";
  }
  
  if (lower.includes("rate") || lower.includes("price") || lower.includes("cost") || 
      lower.includes("charge") || lower.includes("fee")) {
    return "rates";
  }
  
  if (lower.includes("rough") || lower.includes("kinky") || lower.includes("naughty") || 
      lower.match(/\b(sex|fuck|cock|dick|pussy|ass)\b/)) {
    return "boundary";
  }
  
  return "default";
};

export const getTimeframe = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "this afternoon";
  if (hour < 17) return "tonight";
  return "tomorrow";
};

export const generateResponse = (message: string, providerName?: string): string => {
  const intent = detectIntent(message);
  const category = casualResponses[intent];
  
  let response = category.replies[Math.floor(Math.random() * category.replies.length)];
  const emoji = category.emojis[Math.floor(Math.random() * category.emojis.length)];
  
  // Add timeframe for availability responses
  if (intent === "availability") {
    response = response.replace("[timeframe]", getTimeframe());
  }
  
  // Add provider name occasionally
  if (providerName && Math.random() > 0.7) {
    response = response.replace("babe", providerName);
  }
  
  return `${response} ${emoji}`;
};
