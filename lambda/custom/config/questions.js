'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_US: [
        {
            index: 1,
            question: 'In what year did Singapore achieve independence?',
            answers: ["1965", "1964", "1945","1819"],
            correct_answer: '1965'
        },
        {
          index: 2,
          question:  "Who is Singapore's biggest trading partner",
          answers: ["Malaysia",
                "China",
                "Indonesia",
                "USA",
                "Canada",
                "Japan",
                "South Korea"],
          correct_answer: 'Malaysia'
        },
        {
            index: 3,
            question: 'What type of animal is a seahorse?',
            answers: ['crustacean', 'arachnid', 'fish', 'shell'],
            correct_answer: 'fish'
        },
        {
            index: 4,
            question: "What is the name of Singapore's third Prime Minister?",
            answers: ["Lee Hsien Loong",
                "Goh Chok Tong",
                "Tony Tan",
                "Lee Kuan Yew"],
            correct_answer: 'ee Hsien Loong'
        },
        {
            index: 5,
            question: '"What is the name of the Singapore airport?',
            answers: ["Changi Airport",
                "Incheon Airport",
                "Haneda Airport",
                "Kuala Lumpur International Airport"],
            correct_answer: 'Changi Airport'
        },
        {
            index: 6,
            question: 'What is the newest MRT(subway) line in Singapore?',
            answers: [ "Downtown Line",
                "East-West Line",
                "North-South Line",
                "Circle Line"],
            correct_answer: 'Downtown Line'
        },
        {
            index: 7,
            question: 'Which is Singapore biggest local company that is not a bank?',
            answers: ["Singapore Airlines",
                "Creative Technologies",
                "Razer Inc",
                "Singtel"],
            correct_answer: 'Singapore Airlines'
        },
        {
            index: 8,
            question: "What are the colors of the Singapore flag?",
            answers: ["Red and White",
                "Blue, Red and White",
                "Yellow, Red, White and Blue",
                "Yellow, Red and White"],
            correct_answer: 'Red and White'
        },
        {
            index: 9,
            question: 'Which of the following is banned in Singapore?',
            answers: ["Chewing Gum",
                "Alcohol",
                "Cigarettes",
                "Pet Chinchillas"],
            correct_answer: 'Chewing Gum'
        },
        {
            index: 10,
            question: 'When was Singapore last general election?',
            answers: ["2015",
                "2011",
                "2016",
                "2006"],
            correct_answer: '2015'
        }

    ],
    questions_en_GB: [
        {
            index: 1,
            question: 'In what year did Singapore achieve independence?',
            answers: ["1965", "1964", "1945","1819"],
            correct_answer: '1965'
        },
        {
          index: 2,
          question:  "Who is Singapore's biggest trading partner",
          answers: ["Malaysia",
                "China",
                "Indonesia",
                "USA",
                "Canada",
                "Japan",
                "South Korea"],
          correct_answer: 'Malaysia'
        },
        {
            index: 3,
            question: 'What type of animal is a seahorse?',
            answers: ['crustacean', 'arachnid', 'fish', 'shell'],
            correct_answer: 'fish'
        },
        {
            index: 4,
            question: "What is the name of Singapore's third Prime Minister?",
            answers: ["Lee Hsien Loong",
                "Goh Chok Tong",
                "Tony Tan",
                "Lee Kuan Yew"],
            correct_answer: 'ee Hsien Loong'
        },
        {
            index: 5,
            question: '"What is the name of the Singapore airport?',
            answers: ["Changi Airport",
                "Incheon Airport",
                "Haneda Airport",
                "Kuala Lumpur International Airport"],
            correct_answer: 'Changi Airport'
        },
        {
            index: 6,
            question: 'What is the newest MRT(subway) line in Singapore?',
            answers: [ "Downtown Line",
                "East-West Line",
                "North-South Line",
                "Circle Line"],
            correct_answer: 'Downtown Line'
        },
        {
            index: 7,
            question: 'Which is Singapore biggest local company that is not a bank?',
            answers: ["Singapore Airlines",
                "Creative Technologies",
                "Razer Inc",
                "Singtel"],
            correct_answer: 'Singapore Airlines'
        },
        {
            index: 8,
            question: "What are the colors of the Singapore flag?",
            answers: ["Red and White",
                "Blue, Red and White",
                "Yellow, Red, White and Blue",
                "Yellow, Red and White"],
            correct_answer: 'Red and White'
        },
        {
            index: 9,
            question: 'Which of the following is banned in Singapore?',
            answers: ["Chewing Gum",
                "Alcohol",
                "Cigarettes",
                "Pet Chinchillas"],
            correct_answer: 'Chewing Gum'
        },
        {
            index: 10,
            question: 'When was Singapore last general election?',
            answers: ["2015",
                "2011",
                "2016",
                "2006"],
            correct_answer: '2015'
        }

    ]
});
