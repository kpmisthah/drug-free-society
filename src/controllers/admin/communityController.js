let loadCommunities = async(req,res)=>{
    try {
        return res.render('admin/community',{
            events: [], // Add your events data here
            forums: [], // Add your forums data here
            opportunities: [] // Add your volunteer opportunities data here
        })
    } catch (error) {
        console.log(error);
        
    }
}
export{loadCommunities}