const CHAT_DATA: Chat[] = [
    {
        chatID: "1669e5e463e9be2c",
        users: [
            {
                uid: "1",
                email: "remotasks@leader.com",
                displayname: "Remotasks Leader",
                photoURL: "/assets/profile2.png"
            },
            {
                uid: "2",
                email: "tooj@rtn.com",
                displayname: "Remotasks Leader",
                photoURL: "/assets/profile2.png"
            }
        ],
        lastMessage: {
            from: "",
            text: "High accuracy means high pay so it is now up to you.",
            timestampe: "2h"
        }
    },
    {
        chatID: "f372a33648a8b77b",
        users: [
            {
                uid: "2",
                email: "tooj@rtn.com",
                displayname: "Tooj Rtn",
                photoURL: "/assets/profile.png"
            },
            {
                uid: "1",
                email: "remotasks@leader.com",
                displayname: "Tooj Rtn",
                photoURL: "/assets/profile.png"
            }
        ],
        lastMessage: {
            from: "",
            text: "Kez lty sao mba afaka manoro ny momban'le segmentatio less la le.",
            timestampe: "30min"
        }
    }
]

const USER_DATA: User[] = [
    {
        uid: "1",
        email: "remotasks@leader.com",
        displayname: "Remotasks Leader",
        photoURL: "/assets/profile2.png"
    },
    {
        uid: "2",
        email: "tooj@rtn.com",
        displayname: "Remotasks Leader",
        photoURL: "/assets/profile2.png"
    }
]

const MESSAGES_DATA: Message[] = [
    {
        messageID: "x5cvv",
        sender: {
            uid: "1",
            email: "remotasks@leader.com",
            displayname: "Remotasks Leader",
            photoURL: "/assets/profile2.png"
        },
        text: "Hi Bro",
        timestamp: "Tue 08:30AM",
    },
    {
        messageID: "f5df8g",
        sender: {
            uid: "1",
            email: "remotasks@leader.com",
            displayname: "Remotasks Leader",
            photoURL: "/assets/profile2.png"
        },
        text: "I've got some news for you!",
        timestamp: "Tue 08:32AM",
    },
    {
        messageID: "dfr74r",
        sender: {
            uid: "2",
            email: "tooj@rtn.com",
            displayname: "Remotasks Leader",
            photoURL: "/assets/profile2.png"
        },
        text: "Salama less!",
        timestamp: "Tue 10:15AM",
    },
    {
        messageID: "fgf8gs",
        sender: {
            uid: "2",
            email: "tooj@rtn.com",
            displayname: "Remotasks Leader",
            photoURL: "/assets/profile2.png"
        },
        text: "Inona less zany sera vaovao zany le",
        timestamp: "Wed 18:30PM",
    },
    {
        messageID: "5d7g",
        sender: {
            uid: "2",
            email: "tooj@rtn.com",
            displayname: "Remotasks Leader",
            photoURL: "/assets/profile2.png"
        },
        text: "Ty ve?",
        media: "/assets/media.jpeg",
        timestamp: "Wed 18:32PM",
    },
    {
        messageID: "vdb4",
        sender: {
            uid: "1",
            email: "remotasks@leader.com",
            displayname: "Remotasks Leader",
            photoURL: "/assets/profile2.png"
        },
        text: "Ye!",
        timestamp: "Tue 18:55PM",
    }
]

export { CHAT_DATA, USER_DATA, MESSAGES_DATA }