export interface OpenAIResponse {
  id: string; // ID of the OpenAI response
  object: string; // Type of response object
  created: number; // Timestamp of creation
  choices: Array<{
    text: string; // Generated text (summary, sentiment, etc.)
    finish_reason: string; // Reason for the response completion
  }>;
  usage: {
    prompt_tokens: number; // Number of tokens in the prompt
    completion_tokens: number; // Number of tokens in the completion
    total_tokens: number; // Total token count
  };
}
