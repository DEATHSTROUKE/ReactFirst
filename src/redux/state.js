export let state = {
    profileData: {
        posts: [
            {
                id: 1,
                text: "Hey! that's my first post",
                likesCount: 0
            },
            {
                id: 2,
                text: "Today I'm so happy!",
                likesCount: 0
            },
            {
                id: 3,
                text: "Nice",
                likesCount: 0
            }
        ]
    },
    dialogsData: [
        {
            dialogId: 1,
            user: {
                userId: 1,
                userName: 'Dimon'
            },
            messages: [
                {
                    authorId: 1,
                    text: 'Hello'
                },
                {
                    authorId: 0,
                    text: 'Hi'
                },
                {
                    authorId: 1,
                    text: 'How are you?'
                },
                {
                    authorId: 0,
                    text: 'Fine'
                }
            ]
        },
        {
            dialogId: 2,
            user: {
                userId: 2,
                userName: 'Anton'
            },
            messages: [
                {
                    authorId: 1,
                    text: 'Ку'
                },
                {
                    authorId: 0,
                    text: 'Хей бро!'
                },
                {
                    authorId: 1,
                    text: 'Делишки?'
                },
                {
                    authorId: 0,
                    text: 'Збс'
                }
            ]
        }
    ]
}

