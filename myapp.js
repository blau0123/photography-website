function createAllPhotos(evt){
    var folder = "photographs/"
    // appends all files in photographs folder to photos[]
    $.ajax({
        url : folder,
        success: function(data){
            $(data).find("a").attr("href", function(i, val){
                // only looks at files that end with .jpe, .jpg., .png
                if( val.match(/\.(jpe?g|png)$/) ){
                    // create element and set source (current file)
                    var newImg = document.createElement('img');
                    newImg.src = val;
                    newImg.className = "photo";

                    // append each image to album-content div
                    document.getElementById('album-content').appendChild(newImg);
                }
            })
        }
    });

    setPhotoAttributes();
}

function setPhotoAttributes(){
    var allPhotos = document.getElementsByClassName('photo');
    for (var i = 0; i < allPhotos.length; i++){
        allPhotos[i]
    }
}

function main(){
    createAllPhotos();
}

main();