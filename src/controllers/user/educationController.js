const loadEducation = async(req,res)=>{
    try {
        return res.render('user/education',{
            blogs: [
                {
                    id: 1,
                    title: "Understanding Drug Prevention",
                    excerpt: "Learn about effective strategies..."
                },
                // Add more blog posts
            ],
            videos: [
                {
                    embedUrl: "your-video-url",
                    title: "Drug Prevention for Students",
                    description: "Educational video about..."
                },
                // Add more videos
            ],
            quizzes: [
                {
                    question: "Which of these is a warning sign of drug abuse?",
                    options: [
                        "Sudden changes in behavior",
                        "Changes in sleeping patterns",
                        "Unexplained need for money",
                        "All of the above"
                    ],
                    correctAnswer: 3
                },
                // Add more quizzes
            ],
            infographics: [
                {
                    id: 1,
                    imageUrl: "/images/infographic1.jpg",
                    title: "Drug Abuse Statistics",
                    description: "Visual representation of..."
                },
                // Add more infographics
            ]
        })
    } catch (error) {
        console.log("the error is",error);
        
    }
}
export{loadEducation}