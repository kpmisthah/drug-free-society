const loadDashboard = async(req,res)=>{
    try {
        return res.render('admin/dashboard', {
            totalReports: 100,
            pendingReports: 20,
            activeUsers: 500,
            contentViews: 1500,
            recentReports: [
              { id: 1, date: '2025-02-18', location: 'New York', type: 'Fraud', status: 'Pending', statusColor: 'warning' },
              { id: 2, date: '2025-02-17', location: 'Los Angeles', type: 'Scam', status: 'Resolved', statusColor: 'success' },
              { id: 3, date: '2025-02-16', location: 'Chicago', type: 'Abuse', status: 'In Progress', statusColor: 'primary' },
            ],
          })
    } catch (error) {
        console.log("The error is",error);
        
    }
}
export{loadDashboard}