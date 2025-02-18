const loadSupport = async(req,res)=>{
    try {
        const data = {
            helplines: [
                { name: "National Drug Helpline", number: "1-844-289-0879", hours: "24/7" },
                { name: "SAMHSA's National Helpline", number: "1-800-662-4357", hours: "24/7" },
                { name: "Crisis Text Line", number: "Text HOME to 741741", hours: "24/7" }
            ],
            treatmentCenters: [
                { name: "Hope Recovery Center", address: "123 Healing Way", phone: "555-0123" },
                { name: "New Beginnings Rehab", address: "456 Fresh Start Ave", phone: "555-0124" },
                { name: "Serenity Treatment", address: "789 Peace Street", phone: "555-0125" }
            ],
            counselingServices: [
                { name: "Family Support Counseling", type: "Family & Individual", phone: "555-0126" },
                { name: "Youth Guidance Center", type: "Adolescent Support", phone: "555-0127" },
                { name: "Recovery Counseling Group", type: "Group Therapy", phone: "555-0128" }
            ],
            resources: [
                { name: "Family Support Guide", type: "PDF", size: "2.1 MB", filename: "family-guide.pdf" },
                { name: "Recovery Roadmap", type: "PDF", size: "1.8 MB", filename: "recovery-roadmap.pdf" },
                { name: "Understanding Addiction", type: "PDF", size: "1.5 MB", filename: "understanding-addiction.pdf" }
            ]
        };
        return res.render('user/support',{data})
    } catch (error) {
       console.log("The error",error);
        
    }
}
export{loadSupport}