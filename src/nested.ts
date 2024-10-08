import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let publishedQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].published) {
            publishedQuestions.push(questions[i]);
        }
    }
    return publishedQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let nonEmptyQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (
            questions[i].body != "" ||
            questions[i].expected != "" ||
            questions[i].options.length > 0
        ) {
            nonEmptyQuestions.push(questions[i]);
        }
    }
    return nonEmptyQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    for (let i = 0; i < questions.length; i++) {
        if (id == questions[i].id) {
            return questions[i];
        }
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let newQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id != id) {
            newQuestions.push(questions[i]);
        }
    }
    return newQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let names: string[] = [];
    for (let i = 0; i < questions.length; i++) {
        names.push(questions[i].name);
    }
    return [...names];
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let sum: number = 0;
    for (let i = 0; i < questions.length; i++) {
        sum += questions[i].points;
    }
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let sum: number = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].published) {
            sum += questions[i].points;
        }
    }
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let paragraph: string = "id,name,options,points,published";
    for (let i = 0; i < questions.length; i++) {
        paragraph +=
            "\n" +
            questions[i].id.toString() +
            "," +
            questions[i].name +
            "," +
            questions[i].options.length.toString() +
            "," +
            questions[i].points.toString() +
            "," +
            questions[i].published;
    }
    return paragraph;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answers: Answer[] = [];
    for (let i = 0; i < questions.length; i++) {
        answers.push({
            questionId: questions[i].id,
            text: "",
            submitted: false,
            correct: false,
        });
    }
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question: Question) => ({
        ...question,
        options: [...question.options],
        published: true,
    }));
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    for (let i = 1; i < questions.length; i++) {
        if (questions[i - 1].type != questions[i].type) {
            return false;
        }
    }
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let newQuestions: Question[] = questions.map((question: Question) => ({
        ...question,
        options: [...question.options],
    }));
    newQuestions.push(makeBlankQuestion(id, name, type));
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let newQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id != targetId) {
            newQuestions.push(questions[i]);
        } else {
            newQuestions.push({
                ...questions[i],
                name: newName,
                options: [...questions[i].options],
            });
        }
    }
    return newQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    let newQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id != targetId) {
            newQuestions.push(questions[i]);
        } else {
            if (newQuestionType == "multiple_choice_question") {
                newQuestions.push({
                    ...questions[i],
                    type: newQuestionType,
                    options: [...questions[i].options],
                });
            } else {
                newQuestions.push({
                    ...questions[i],
                    type: newQuestionType,
                    options: [],
                });
            }
        }
    }
    return newQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let newQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id != targetId) {
            newQuestions.push(questions[i]);
        } else {
            newQuestions.push({
                ...questions[i],
                options: [...questions[i].options],
            });
            if (targetOptionIndex == -1) {
                newQuestions[i].options.push(newOption);
            } else {
                newQuestions[i].options[targetOptionIndex] = newOption;
            }
        }
    }
    return newQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    let newQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        newQuestions.push(questions[i]);
        if (questions[i].id == targetId) {
            newQuestions.push(duplicateQuestion(newId, questions[i]));
        }
    }
    return newQuestions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );
}
