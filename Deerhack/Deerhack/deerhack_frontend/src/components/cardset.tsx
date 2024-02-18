// 'use client' is not a valid TypeScript syntax, remove it.

// Import React and the FlashcardArray component
'use client'
import React from "react";
import { FlashcardArray } from "react-quizlet-flashcard";

// Define an interface for the info items
interface CardInfo {
  front: string;
  back: string;
}

// Define the CardsetProps interface
interface CardsetProps {
  info: CardInfo[];
}

// Adjust the function signature to use the CardsetProps type for the info parameter
function Cardset({ info }: CardsetProps) {
  // Use the correct type for the cards array
  const cards: { id: number; frontHTML: JSX.Element; backHTML: JSX.Element }[] = [];

  for (let i = 0; i < info.length; i++) {
    // Use the correct expression to reference properties of the current info object
    const currInfo = {
      id: i,
      frontHTML: <>{info[i].front}</>,
      backHTML: <>{info[i].back}</>,
    };
    cards.push(currInfo);
  }

  return (
    <div>
      <div className="flashdiv">
        <FlashcardArray cards={cards} />
      </div>
    </div>
  );
}

export default Cardset;
