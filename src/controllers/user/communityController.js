const loadCommunity = async(req,res)=>{
    try {
        const data = {
            stats: [
                { number: "1,200+", label: "Community Members" },
                { number: "50+", label: "Active Groups" },
                { number: "100+", label: "Monthly Events" },
                { number: "5,000+", label: "Forum Posts" }
            ],
            events: [
                {
                    id: 1,
                    day: "15",
                    month: "MAR",
                    title: "Community Awareness Workshop",
                    location: "Community Center",
                    description: "Join us for an interactive workshop on drug abuse prevention and community safety."
                },
                {
                    id: 2,
                    day: "22",
                    month: "MAR",
                    title: "Family Support Group Meeting",
                    location: "Local Library",
                    description: "Monthly support group meeting for families affected by substance abuse."
                }
            ],
            forums: [
                {
                    id: 1,
                    icon: "fas fa-heart",
                    title: "Recovery Support",
                    members: 150,
                    posts: 450,
                    description: "A safe space to share recovery stories and support others on their journey."
                },
                {
                    id: 2,
                    icon: "fas fa-hands-helping",
                    title: "Community Action",
                    members: 200,
                    posts: 680,
                    description: "Discuss and organize community initiatives and volunteer opportunities."
                }
            ],
            members: [
                {
                    name: "John D.",
                    role: "Community Leader",
                    joinDate: "Jan 2023"
                },
                {
                    name: "Sarah M.",
                    role: "Support Group Facilitator",
                    joinDate: "Mar 2023"
                },
                {
                    name: "David R.",
                    role: "Volunteer Coordinator",
                    joinDate: "Jun 2023"
                }
            ]
        };
        return res.render('user/community',{data})
    } catch (error) {
        console.log("the error",error);
        
    }
}
export{loadCommunity}