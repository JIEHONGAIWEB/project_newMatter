  
     


    $("#box").html("lalala...");
    


    let arrNavData = [];
    let arrNavRightImage = [] ; 
    let arrNavRightTitle = [] ; 

           
/**
     * 数据的获取需要请求
     * 直接用Jquery的请求方式
     * 服务器请求获取需要的数据
 */

    $.ajax({
        "url":"json/productsInfo.json",
        "success":jsonNavData,
        "async":false,
        "dataType":"json"
    });

    
    function jsonNavData(json){
        // console.log(json.comment.length);
       let length = json.length;
        for(let i =0; i < length;i++ ){
            arrNavData.push(json[i].data.title);
            
            for(let j =0;j< 13;j++){
                
                arrNavRightTitle.push(json[i].right[j].title);
                arrNavRightImage.push(json[i].right[j].img);
            }
           
           //arrNavRightImage.push(json.homeelec.right[2].items[i].image);
   
        }
           
        console.log(arrNavData);
        console.log(arrNavRightImage);
        console.log(arrNavRightTitle);



      
}//end ajax









               


     
 
              


     
 




 

