function expand(idName){
  //  document.querySelector('#'+ idName).classList.remove('reveal');
   
  if (idName=="BEE"){
  
    document.querySelector('#BEC' ).classList.remove('reveal');
    document.querySelector('#CHEM' ).classList.remove('reveal');
    document.querySelector('#EVS' ).classList.remove('reveal');
    document.querySelector('#CP' ).classList.remove('reveal');

}
else if (idName=="BEC")
{
    document.querySelector('#BEE' ).classList.remove('reveal');
    document.querySelector('#CHEM' ).classList.remove('reveal');
    document.querySelector('#EVS' ).classList.remove('reveal');
    document.querySelector('#CP' ).classList.remove('reveal');
}

else if (idName=="CP")
{
    document.querySelector('#BEE' ).classList.remove('reveal');
    document.querySelector('#CHEM' ).classList.remove('reveal');
    document.querySelector('#EVS' ).classList.remove('reveal');
    document.querySelector('#BEC' ).classList.remove('reveal');
}
else if (idName=="EVS")
{
    document.querySelector('#BEE' ).classList.remove('reveal');
    document.querySelector('#CHEM' ).classList.remove('reveal');
    document.querySelector('#BEC' ).classList.remove('reveal');
    document.querySelector('#CP' ).classList.remove('reveal');
}
else if (idName=="CHEM")
{
    document.querySelector('#BEE' ).classList.remove('reveal');
    document.querySelector('#BEC' ).classList.remove('reveal');
    document.querySelector('#EVS' ).classList.remove('reveal');
    document.querySelector('#CP' ).classList.remove('reveal');
}



    document.querySelector('#'+ idName).classList.toggle('reveal');
}