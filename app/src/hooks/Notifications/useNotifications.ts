import { useState } from "react";

export const useNotifications = () => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const notifications = [
        {
        title: "New artwork added!",
        description: "1 hour ago",
        },
        {
        title: "You have a new message!",
        description: "1 hour ago",
        },
        {
        title: "Event reminder: Meeting with the health team",
        description: "2 hours ago",
        },
    ]
    
    return { 
        notifications,
        previewVisible,
        setPreviewVisible,
     }
}