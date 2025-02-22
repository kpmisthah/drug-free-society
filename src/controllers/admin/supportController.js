let loadAdminSupport = async(req,res)=>{
    try {
        return res.render('admin/support')
    } catch (error) {
        console.log(error);
        
    }
}
export{loadAdminSupport}