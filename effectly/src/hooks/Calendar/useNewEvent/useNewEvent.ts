import { useRef, useState } from "react";

const useNewEvent = () => {
    const [isAllDay, setIsAllDay] = useState(false);
    const [eventCategory, setEventCategory] = useState('');
    
    const eventName = useRef<HTMLInputElement>(null);
    const eventStartDate = useRef<HTMLInputElement>(null);
    const eventEndDate = useRef<HTMLInputElement>(null);
};

export default useNewEvent;