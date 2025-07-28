import { generateObjectId } from "../utils/generateObjectId";

export const storeMockIDs = () => {
    const teacherId = generateObjectId();
    const teacherId_2 = generateObjectId();
    const examId = generateObjectId();
    const examId_2 = generateObjectId();

    localStorage.setItem('iTeacherId', teacherId); // i = initial
    localStorage.setItem('iTeacherId_2', teacherId_2);
    localStorage.setItem('iExamId', examId);
    localStorage.setItem('iExamId_2', examId_2);
}