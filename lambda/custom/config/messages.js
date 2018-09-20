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
'use strict';

const questions = require('./questions');
const settings = require('./settings');
const GAME_TITLE = 'Trivia about Singapore';

const messages = {
  en: {
    translation: {
      'QUESTIONS': questions.questions_en_US,
      'GENERAL_HELP': {
        outputSpeech: 'To get started just ask me to play a game. ' +
          'What would you like to do? ',
        reprompt: "Sorry, I didn't catch that, what would you like to do next?",
        displayTitle: GAME_TITLE + ' - Help',
        displayText: 'This is a trivia game for the Echo Buttons. ' +
          'To get started just ask me to play a game.'
      },
      'UNHANDLED_REQUEST': {
        outputSpeech: "Sorry, I didn't get that. Please say again!",
        reprompt: "Please say it again. You can ask for help if you're not sure what to do."
      },
      'GOOD_BYE': {
        outputSpeech: "Ok, see you next time!",
        reprompt: ''
      },

      //
      //--------------------  Start Game Related Prompts -------------------------------------------
      //
      'START_GAME': {
        outputSpeech: "Welcome to " + GAME_TITLE + ". This game supports up to " +
          settings.GAME.MAX_PLAYERS + " players. " +
          "How many players are there?",
        reprompt: "How many players?",
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "Welcome to " + GAME_TITLE + ". This game supports up to " +
          settings.GAME.MAX_PLAYERS + " players."
      },
      'RESUME_GAME': {
        outputSpeech: 'Ok, we will pick up where you left off. ' +
          'How many players will be playing?',
        reprompt: 'How many players?',
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "Welcome back!"
      },
      'DONT_RESUME_GAME': {
        outputSpeech: 'Ok, lets start a new game. How many players will be playing?',
        reprompt: 'How many players?',
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "Ok. Let's start a new game!"
      },
      'ASK_TO_RESUME': {
        outputSpeech: "It looks like you have a {{player_count}} player game in progress, " +
          "would you like to resume?",
        reprompt: 'Would you like to resume the last game?',
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "You have a {{player_count}} player game in progress."
      },
      'PLAYERCOUNT_INVALID': {
        outputSpeech: 'Please say a number between one and ' + settings.GAME.MAX_PLAYERS,
        reprompt: 'Please say a number between one and ' + settings.GAME.MAX_PLAYERS
      },
      'SINGLE_PLAYER_GAME_READY': {
        outputSpeech: ["Fantastic! Are you ready to start the game?"],
        reprompt: "Ready to start the game?",
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "Are you ready to start the game?"
      },

      //
      //--------------------  Roll Call Related Prompts -------------------------------------------
      //
      'ROLL_CALL_HELP': {
        outputSpeech: 'This is a trivia game for Echo Buttons. ' +
          'In order to play the game, each player must check in by ' +
          'pressing an Echo Button. Would you like to continue and ' +
          'check players in for the game?',
        reprompt: "Sorry, I didn't catch that, what would you like to do next?",
        displayTitle: GAME_TITLE + ' - Help',
        displayText: 'In order to play the game, each player must check in by ' +
          'pressing an Echo Button. Would you like to continue?'
      },
      'ROLL_CALL_CONTINUE': {
        outputSpeech: "Ok. Players, press your buttons now, " +
          "so I'll know which buttons you will be using.",
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "To resume the game, each player, please press your button once!"
      },
      'ROLL_CALL_TIME_OUT': {
        outputSpeech: "<say-as interpret-as='interjection'>uh oh</say-as>, " +
          "looks like times up and I haven't heard from all players. " +
          "Did you want to continue?",
        reprompt: "should we continue?"
      },
      'ROLL_CALL_RESUME_GAME': {
        outputSpeech: "To resume the game, each player, please press your button once!",
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "To resume the game, each player, please press your button once!"
      },
      'ROLL_CALL_COMPLETE': {
        outputSpeech: ["Great! We can start the game. Are you ready?",
        "Awesome. All players registered. Are you ready to start the game?"],
        reprompt: "Ready to start the game?",
        displayTitle: GAME_TITLE + " - Welcome",
        displayText: "Are you ready to start the game?"
      },
      'ROLL_CALL_HELLO_PLAYER': {
        outputSpeech: "Hello, player {{player_number}}. "
      },
      'ROLL_CALL_NEXT_PLAYER_PROMPT': {
        outputSpeech: "Ok, your turn Player {{player_number}}, press your button."
      },

      //
      //--------------------  Game Play Related Prompts -------------------------------------------
      //
      'GAME_CANCELLED': {
        outputSpeech: "Ok, see you next time! " +
          "We'll save this game for later if you'd like to resume",
        reprompt: '',
        displayText: "See you next time!",
        displayTitle: "Thanks for playing!"
      },
      'GAME_FINISHED_INTRO': {
        outputSpeech: "The game is finished. Let's hear the final scores."
      },
      'SINGLE_PLAYER_GAME_FINISHED_INTRO': {
        outputSpeech: "The game is finished. Let's hear your final score."
      },
      'GAME_FINISHED': {
        outputSpeech: "Thanks for playing",
        reprompt: '',
        displayText: "See you next time!",
        displayTitle: "Thanks for playing!"
      },
      'PLAY_GAME_FIRST_QUESTION': {
        outputSpeech: "Ok! Let's start the game!"
      },
      'PLAY_GAME_SKIP_QUESTION': {
        outputSpeech: "Alright. Let's try another question."
      },
      'PLAY_GAME_SKIP_LAST_QUESTION': {
        outputSpeech: "Alright. That was the last question."
      },
      'PLAY_GAME_MID_GAME': {
        outputSpeech: "Ok! Let's keep going. " +
          "We are on question {{current_question}}!"
      },
      'ANSWER_TIME_OUT_DURING_PLAY': {
        outputSpeech: "I didn't hear any presses. Would you like to keep playing?",
        reprompt: "Would you like to keep playing?"
      },
      'BUZZ_IN_DURING_PLAY': {
        outputSpeech: "Ok, player {{player_number}}, what's the answer?",
        reprompt: "Player {{player_number}}, are you there?"
      },
      'CORRECT_ANSWER_DURING_PLAY': {
        outputSpeech: "Correct! Great job player {{player_number}}."
      },
      'INCORRECT_ANSWER_DURING_PLAY': {
        outputSpeech: "Sorry, wrong answer player {{player_number}}."
      },
      'INCORRECT_ANSWER_TOO_MANY_TIMES': {
        outputSpeech: "Sorry, wrong answer player {{player_number}}. " +
          "Let's try another question."
      },
      'SINGLE_PLAYER_CORRECT_ANSWER_DURING_PLAY': {
        outputSpeech: "Correct! Great job."
      },
      'SINGLE_PLAYER_INCORRECT_ANSWER_DURING_PLAY': {
        outputSpeech: "Sorry, wrong answer."
      },
      'MISUNDERSTOOD_ANSWER': {
        outputSpeech: "Sorry, I didn't get that. Please say again!",
        reprompt: "Please repeat the answer."
      },
      'ANSWER_WITHOUT_BUTTONS': {
        outputSpeech: "<say-as interpret-as='interjection'>now now</say-as>" +
          "<break time='1s'/>Press your button to answer the question!"
      },
      'ANSWER_BEFORE_QUESTION': {
        outputSpeech: "I haven't asked the question yet! Wait for me to ask, then " +
          "press your button if you know the answer! Are you ready?",
        reprompt: "Are you ready to play?"
      },
      'ASK_QUESTION_DISPLAY': {
        displayTitle: GAME_TITLE + " - Question {{question_number}}"
      },
      'ANSWER_QUESTION_CORRECT_DISPLAY': {
        displayTitle: GAME_TITLE + " - Player {{player_number}}",
        displayText: ["Great job! That's right.",
        "Awesome! That's the answer.",
        "Correct! You got it."]
      },
      'ANSWER_QUESTION_INCORRECT_DISPLAY': {
        displayTitle: GAME_TITLE + " - Player {{player_number}}",
        displayText: ["Opps! That's not right.",
        "Oh no! That's not the answer.",
        "No, that's not it!"]
      },
      'SINGLE_PLAYER_ANSWER_QUESTION_CORRECT_DISPLAY': {
        displayTitle: GAME_TITLE,
        displayText: ["Great job! That's right.",
        "Awesome! That's the answer.",
        "Correct! You got it."]
      },
      'SINGLE_PLAYER_ANSWER_QUESTION_INCORRECT_DISPLAY': {
        displayTitle: GAME_TITLE,
        displayText: ["Opps! That's not right.",
        "Oh no! That's not the answer.",
        "No, that's not it!"]
      },
      'ASK_FIRST_QUESTION_NEW_GAME_DISPLAY': {
        displayTitle: GAME_TITLE + " - New Game",
        displayText: "Get ready to start!"
      },
      'ASK_FIRST_QUESTION_RESUME_DISPLAY': {
        displayTitle: GAME_TITLE + " - Resume Game",
        displayText: "Get ready to start!"
      },
      'GAME_PLAY_HELP': {
        outputSpeech: 'This is a trivia game for Echo Buttons. ' +
          'During the game, I will ask one question at a time. ' +
          'If you know the answer, press your button for a chance ' +
          'to answer. You will earn a point for each question you ' +
          'answer correctly. Would you like to continue to play? ',
        reprompt: "Sorry, I didn't catch that, what would you like to do next?",
        displayTitle: GAME_TITLE + " - Help",
        displayText: 'During the game, I will ask one question at a time. ' +
          'If you know the answer, press your button for a chance ' +
          'to answer. You will earn a point for each question you ' +
          'answer correctly.'
      },

      //
      //--------------------  Round Summary Related Prompts -------------------------------------
      //
      'GAME_ROUND_SUMMARY_INTRO': {
        outputSpeech: "After the <say-as interpret-as='ordinal'>{{round}}</say-as> round."
      },
      'GAME_ROUND_SUMMARY_OUTRO': {
        outputSpeech: "Let's continue!"
      },

      //
      //--------------------  Scoring Related Prompts -------------------------------------------
      //
      'SCORING_TIED_NO_ANSWERS': {
        outputSpeech: "It's a tie! With no correct answers. Can you do better?"
      },
      'SCORING_TIED_ONE_ANSWER': {
        outputSpeech: "It's a tie! With a single correct answer. What a game!"
      },
      'SCORING_TIED_MULTIPLE_ANSWERS': {
        outputSpeech: "It's a tie! With {{answer_count}} correct answers. What a game!"
      },

      'SCORING_SINGLE_PLAYER_NO_ANSWERS': {
        outputSpeech: "You haven't answered any questions correctly"
      },
      'SCORING_SINGLE_PLAYER_ONE_ANSWER': {
        outputSpeech: "You answered a single question correctly"
      },
      'SCORING_SINGLE_PLAYER_MULTIPLE_ANSWERS': {
        outputSpeech: "You have {{answer_count}} correct answers"
      },
      'SCORING_MULTI_PLAYERS': {
        outputSpeech: "In <say-as interpret-as='ordinal'>{{place}}</say-as> place, " +
          " {{score_details}}"
      }
    }
  },

  //
  // To override by territory follow the below pattern
  //
  // For additional information on translations and formatting messages see https://www.i18next.com/
  //
  'en-US': {
    translation: {
      'GAME_ROUND_SUMMARY_OUTRO': {
        outputSpeech: "Let's continue!"
      }
    },
  },
  'en-GB': {
    translation: {
      'QUESTIONS': questions.questions_en_GB,
      'GAME_ROUND_SUMMARY_OUTRO': {
        outputSpeech: "Onward!"
      }
    }
  }
};

module.exports = messages;