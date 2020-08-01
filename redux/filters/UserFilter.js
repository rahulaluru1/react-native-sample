export default getUser=(users,id)=>{
    var data={}
    users.forEach(user=>{
        if(user.id===id){
            data = user;
            return data;
        }
    })
    return data;
}