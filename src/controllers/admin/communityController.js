let loadCommunities = async (req, res) => {
    try {
        return res.render('admin/community', {
            events: [], // Add your events data here
            forums: [], // Add your forums data here
            stats: [],
            opportunities: [], // Add your volunteer opportunities data here
            initiatives: [
                {
                    name: "Clean City Drive",
                    volunteers: 25,
                    startDate: "2024-02-01",
                    endDate: "2024-02-10",
                    status: "Active",
                },
                {
                    name: "Food for All",
                    volunteers: 40,
                    startDate: "2024-01-15",
                    endDate: "2024-02-05",
                    status: "Completed",
                },
                {
                    name: "Tree Plantation",
                    volunteers: 30,
                    startDate: "2024-03-01",
                    endDate: "2024-03-15",
                    status: "Upcoming",
                },
                {
                    name: "Tech for Change",
                    volunteers: 50,
                    startDate: "2024-02-10",
                    endDate: "2024-02-20",
                    status: "Active",
                }
            ],
        });
    } catch (error) {
        console.log(error);
    }
};

export { loadCommunities };
