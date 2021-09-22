let nama = "Muhammad Herbi" ;
let dob = new Date(2001, 3, 5) ;
let kelamin = "L";
let fakultas = 9 ;
let jurusan = 1 ;
let kuliah = 2018 ;


function birthday(){
    return (`${dob.getDate()}${dob.getMonth()}${dob.getFullYear()}`);
}

function year(){
    return (kuliah.toString().substring(2));
}

function gender(){
    if(kelamin == "L")
        return(`1`);
    
    else if(kelamin == "W")
        return (`2`);
    
    else {
        return (`Harap Isi Data dengan Benar , W = untuk Wanita , L = Pria`);
    }
 }

function FakultasNIM(){
    if(fakultas < 10 ){
    return(`0${fakultas}`);
}
    else {
        return(`${fakultas}`);
    }
}

function JurusanNIM(){
    if(jurusan < 10 ){
    return(`0${jurusan}`);
}
    else {
        return(`${jurusan}`);
    }
}

function RandomNIM(){
    let angkaacak = Math.floor(Math.random()*10) ;
   return (angkaacak);

}

function CreateNIM()
{
    console.log (`${year()}${gender()}${FakultasNIM()}${JurusanNIM()}${birthday()}${RandomNIM()}`);
}




CreateNIM();

