const nama = "dafa rizqy" ;
let usia = 30;

const biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata()  { 
    let generasi;
    
    if(usia > 10 && usia < 18) { 
        generasi = "anda  generasi remaja";
    } 
    else if(usia > 18 && usia < 30) {
        generasi = "anda dewasa";
    }
    else if (usia >= 30) 
    generasi = " generasi tua";
    
        else if (usia <=10 && usia >2 )
        generasi = "anda generasi anak anak";
        
    else {
        generasi = "generasi bayi";

    }
    return biodata.innerHTML = generasi;
   
}

console.log(nama);
console.log(usia);

generateBiodata();


