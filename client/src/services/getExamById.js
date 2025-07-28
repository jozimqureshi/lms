import { allExams } from "./getAllExams";

export const getExamById = async (id) => {
  const exam = allExams.find((exam) => exam.id === id);
  return new Promise((resolve) => {
    setTimeout(() => resolve(exam), 2); // fake async
  });
};

/*
If using real backend:

 export const getExamById = async (id) => {
  const response = await fetch(`/api/exams/${id}`);
  if (!response.ok) throw new Error("Failed to fetch");
  return await response.json();
};
 */