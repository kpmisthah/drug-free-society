const loadEducation = async(req,res)=>{
    try {
        
const stats = {
    blogCount: 120,
    publishedBlogs: 100,
    draftBlogs: 20,
    videoCount: 45,
    videoViews: 3500,
    quizCount: 10,
    quizCompletions: 450,
    engagementRate: 75,
    engagementChange: 5
};

const blogPosts = [
    { 
        title: 'Understanding Drug Awareness', 
        category: 'Health', 
        status: 'Published', 
        publishedDate: '2025-01-10', 
        views: 1200 
    },
    { 
        title: 'The Impact of Drugs on Society', 
        category: 'Social Impact', 
        status: 'Draft', 
        publishedDate: null, 
        views: 400 
    },
    { 
        title: 'How to Stay Drug-Free', 
        category: 'Prevention', 
        status: 'Published', 
        publishedDate: '2025-02-01', 
        views: 800 
    }
];

const videos = [
    { 
        title: 'Drug-Free Living', 
        duration: '15:30', 
        category: 'Education', 
        uploadDate: '2025-01-01', 
        views: 1200 
    },
    { 
        title: 'Understanding Addiction', 
        duration: '20:45', 
        category: 'Health', 
        uploadDate: '2025-02-05', 
        views: 800 
    }
];

const quizzes = [
    { 
        title: 'Drug Awareness Quiz', 
        questionCount: 10, 
        difficulty: 'Medium', 
        completions: 300, 
        averageScore: 75 
    },
    { 
        title: 'Addiction Knowledge Quiz', 
        questionCount: 8, 
        difficulty: 'Hard', 
        completions: 150, 
        averageScore: 65 
    }
];

const topContent = [
    { 
        title: 'Drug-Free Living Video', 
        type: 'Video', 
        views: 1200, 
        avgTime: '10:00', 
        completionRate: 85, 
        engagementScore: 90 
    },
    { 
        title: 'Drug Awareness Blog', 
        type: 'Blog', 
        views: 800, 
        avgTime: '5:00', 
        completionRate: 70, 
        engagementScore: 80 
    }
];
        return res.render('admin/education', {
            stats,
            blogPosts,
            videos,
            quizzes,
            topContent
        })
    } catch (error) {
        console.log(error);
        
    }
}
export{loadEducation}



