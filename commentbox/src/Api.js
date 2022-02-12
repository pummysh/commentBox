export const getComment=async()=>{
    return [
      {
        id: "1",
        author: "albert",
        body: "Whats the status?",
        timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
        replies: [
          {
            id: "3",
            author: "haren",
            body: "Wrote the test suites, waiting for approval?",
            timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
            replies: [
              {
                id: "4",
                author: "albert",
                body: "Thanks for the update!",
                timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
              }
            ]
          },
          {
            id: "2",
            author: "Nrupul",
            body: "looking forward for the demo!",
            timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
          }
        ]
        },
  ]
    
}

export const createComment = async (text,author) => {
    return {
        id:Math.random().toString(36).substring(2,9),
        author:author,
        body:text,
        timestamp:Date.now(),
        replies:[],
    }
}