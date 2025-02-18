const loadHome = async(req,res)=>{
    try {
        return res.render('user/home')
    } catch (error) {
        console.log("The Error",error);
    }
}
const loadContent = async(req,res)=>{
    try {
        return res.redirect('/home')
    } catch (error) {
        console.log("The error is",error);
        
    }
}
export{loadHome,loadContent}