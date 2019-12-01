    var medicine=1;  
 
 function addmedicine()
{   var midname;
    var mpricename;
    var mqtty;
    var i;
    var mname= new Array(); 
    var mprice=new Array();
    var mqty=new Array();
    for(i=0;i<medicine;i++)
    {   mqtty="medicine"+(i+1)+"qty";
        midname="medicine"+(i+1)+"name";
        mpricename="medicine"+(i+1)+"price";        
      mname[i]=document.getElementById(midname).value;
      mprice[i]=document.getElementById(mpricename).value;
       mqty[i]=document.getElementById(mqtty).value;
      
      
       }
    
    
    medicine++;
   
  
    var addstring="Name:<input type=\"text\" id=\"medicine" + medicine + "name\" value=\"Medicine" + medicine + "\">&nbsp;&nbsp;&nbsp;&nbsp";
    addstring+="Price: <input type=\"number\" id=\"medicine" + medicine + "price\" value=\"0\">INR&nbsp;&nbsp;&nbsp;&nbsp";
     addstring+="Qty:<input type=\"number\" id=\"medicine" + medicine + "qty\" value=\"1\"><br><br>";       
    document.getElementById("medicinedetails").innerHTML+=addstring;
    
    
    for(i=0;i<medicine-1;i++)
    {   mqtty="medicine"+(i+1)+"qty";
        midname="medicine"+(i+1)+"name";
        mpricename="medicine"+(i+1)+"price";        
      document.getElementById(midname).value=mname[i];
      document.getElementById(mpricename).value=mprice[i];
      document.getElementById(mqtty).value=mqty[i];
      
       }
      
}

function refreshprintarea()
{   document.getElementById("companynameprint").innerHTML=document.getElementById("companyname").value; 
    document.getElementById("companyaddressprint").innerHTML=document.getElementById("companyaddress").value;
    var today = new Date(); 
    var dd = today.getDate(); 
    var mm=today.getMonth()+1;
     var yyyy = today.getFullYear(); 
     var today = dd + '/' + mm + '/' + yyyy; 
    document.getElementById("dateofinvoice").innerHTML=today;
    
   
    document.getElementById("customernameprint").innerHTML=document.getElementById("customername").value;
   
   var i;
   var totalprice=0;
   var mpricename;
   var mqty;
   for(i=1;i<=medicine;i++)
   {     mpricename="medicine"+(i)+"price";
       mqty="medicine"+(i)+"qty";
       totalprice+=parseInt(document.getElementById(mpricename).value)*parseInt(document.getElementById(mqty).value);
    }
     document.getElementById("totalamountwithouttd").innerHTML=totalprice;
    var tax=parseInt(document.getElementById("tax").value);
    var discount=parseInt(document.getElementById("discount").value);
    
    taxamount=totalprice*(tax/100);
    discountamount=totalprice*(discount/100);
    document.getElementById("taxamount").innerHTML=taxamount;
    document.getElementById("discountamount").innerHTML=discountamount;
    
    totalprice=totalprice+tax-discount;
    
    
   
    
    document.getElementById("totalsum").innerHTML=totalprice;
    
    document.getElementById("totalamount2").innerHTML=totalprice;
    document.getElementById("subtotal").innerHTML=totalprice;
    
   var mqtysource;
   var mnamesource;
   var mpricesource;
   var mqtydest;
   var mnamedest;
   var mpricedest;
   var mname= new Array(); 
    var mprice=new Array();
    var mqty=new Array();
    for(i=0;i<medicine;i++)
    {   mqtysource="medicine"+(i+1)+"qty";
        mnamesource="medicine"+(i+1)+"name";
        mpricesource="medicine"+(i+1)+"price";        
      mname[i]=document.getElementById(mnamesource).value;
      mprice[i]=document.getElementById(mpricesource).value;
       mqty[i]=document.getElementById(mqtysource).value;
      
      
       }
       var str;
       document.getElementById("medicinesprinting").innerHTML="";
      for(i=0;i<medicine;i++)
      {
          
         str="<div class=\"col-xs-12\"><div class=\"col-xs-5\"><h4>"+ mname[i] + "</h4></div>";
         str+="<div class=\"col-xs-2\"><h4>"+ mprice[i] + "</h4></div>";
         str+="<div class=\"col-xs-2\"><h4>"+ mqty[i] + "</h4></div>";
         str+="<div class=\"col-xs-3\"><h4>"+ mprice[i]*mqty[i] +"</h4></div></div>";
         document.getElementById("medicinesprinting").innerHTML+=str;
          
          
      }
     
 
    
    
    
    
    
    
    
}


function printDiv(divName) {
     var printContents = "<html><head><link rel=\"stylesheet\" media=\"print\" href=\"bootstrap.css\">";
     printContents+="<script src=\"jquery.js\"></script>";
     printContents+="<script src=\"bootstrap.js\"></script>";
     printContents+="<link rel=\"stylesheet\" type=\"text/css\" media=\"print\" href=\"style.css\"></head><body> ";

           printContents+= document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;
     printContents+="</body></html>";
    
     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
