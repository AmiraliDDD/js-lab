function showimg(index){
    let mainimg = document.querySelector(".mainimage");
    let img = document.querySelectorAll(".image");
    let address = img[index-1].getAttribute("src");
    mainimg.setAttribute("src" , address);
    for(i=0;i<img.length;i++){
        img[i].style="";
    }

    img[index-1].style.border="3px solid red";
    


}