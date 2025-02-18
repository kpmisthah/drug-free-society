
const loadReport = async(req,res)=>{
    try {
        res.render('user/report')
    } catch (error) {
        console.log("the error is",error)
    }
}
export{loadReport}