/*
    Network Communication
    Http/https
    Async Call, Promise
    a) then  b) catch
*/ 
// makeNetworkCall('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
async function makeNetworkCall(URL){
    //try-catch because due to await the below code runs sync
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Data: ",data);
        return data;
    }
    catch(err){
        throw err;
    }
    
    /*
    then-catch because async function present 
    Callback in Callback => Callback Hell
    const promise = fetch(URL);  //ES6-2015 (Wrapper - XML http request)
    promise.then((response)=>{
        const promise2 = response.json();
        promise2.then(data => {

        }).catch(err => {
                //Problem in JSON File(data)
        })
    }).catch((err)=>{
                //Problem in URL response
    });

    */
}
export default makeNetworkCall;

