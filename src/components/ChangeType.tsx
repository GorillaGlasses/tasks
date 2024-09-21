import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setValue] = useState<QuestionType>("multiple_choice_question");
    return (
        <div>
            <Button
                onClick={() => {
                    setValue(
                        type == "multiple_choice_question" ?
                            "short_answer_question"
                        :   "multiple_choice_question",
                    );
                }}
            >
                Change Type
            </Button>
            <div>
                {type == "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
