import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Holidays: Christmas, Halloween, New Years, St Patrick's, Thanksgiving
export function alphabeticalCycle(holiday: string): string {
    switch (holiday) {
        case "🎅":
            return "🎃";
        case "🎃":
            return "🎆";
        case "🎆":
            return "☘️";
        case "☘️":
            return "🦃";
        case "🦃":
            return "🎅";
    }
    return "";
}

export function dateCycle(holiday: string): string {
    switch (holiday) {
        case "🎆":
            return "☘️";
        case "☘️":
            return "🎃";
        case "🎃":
            return "🦃";
        case "🦃":
            return "🎅";
        case "🎅":
            return "🎆";
    }
    return "";
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎅");
    return (
        <div>
            Holiday: {holiday}
            <Button
                onClick={() => {
                    setHoliday(alphabeticalCycle(holiday));
                }}
            >
                Cycle by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(dateCycle(holiday));
                }}
            >
                Cycle by Year
            </Button>
        </div>
    );
}
