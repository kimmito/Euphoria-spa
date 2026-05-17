import type { FeedbackFormValues } from "./feedback.schema";

export async function sendFeedback(data: FeedbackFormValues) {
  const response = await fetch("/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Не удалось отправить заявку")
  }
  
}