export interface Answers {
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  answerE?: any;
  answerF?: any;
}

export interface CorrectAnswers {
  answerACorrect: string;
  answerBCorrect: string;
  answerCCorrect: string;
  answerDCorrect: string;
  answerECorrect: string;
  answerFCorrect: string;
}

export interface Tag {
  name: string;
}

export interface Question {
  id: number;
  question: string;
  description?: string;
  answers: Answers;
  multipleCorrectAnswers: string;
  correctAnswers: CorrectAnswers;
  correctAnswer?: string;
  explanation?: string;
  tip?: any;
  tags: Tag[];
  category: string;
  difficulty: string;
}
