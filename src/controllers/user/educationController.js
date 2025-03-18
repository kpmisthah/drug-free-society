import { Video } from "../../models/video.js";
const loadEducation = async(req,res)=>{
    try {
        let videos = await Video.find()
        console.log("the videos are",videos)
        return res.render('user/education',{
            blogs: [
                {
                    id: 1,
                    title: "Understanding Drug Prevention",
                    excerpt: "Learn about effective strategies..."
                },
                // Add more blog posts
            ],
            videos: videos.map((video) => ({
                embedUrl: video.videoUrl, // Use Cloudinary's secure_url
                title: video.filename, // Use original filename as title
                description: `Uploaded on ${new Date(video.createdAt).toLocaleDateString()}`, // Dynamic description
              })),
              quizzes: [
                {
                  question: "Which of these is a warning sign of drug abuse?",
                  options: [
                    "Sudden changes in behavior",
                    "Changes in sleeping patterns",
                    "Unexplained need for money",
                    "All of the above",
                  ],
                  correctAnswer: 3, // Index of correct option (0-based)
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