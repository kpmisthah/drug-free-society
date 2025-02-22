let loadReport = async(req,res)=>{
    try {
        return res.render('admin/report')
    } catch (error) {
        console.log(error);
        
    }
}
export{loadReport}