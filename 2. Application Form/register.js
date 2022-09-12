function validate()
{ 
   if( document.RegForm.name.value == "" )
   {
     alert( "Please Enter your Name!" );
     document.RegForm.name.focus() ;
     return false;
   }
   if( document.RegForm.regno.value == "" )
   {
     alert( "Please Enter your Register Number in the Format! Eg:17ucs284" );
     document.RegForm.regno.focus() ;
     return false;
   }
   
   if( document.RegForm.rollno.value == "" )
   {
     alert( "Please Enter your Roll Number in the Format! Eg:17uw22134" );
     document.RegForm.rollno.focus() ;
     return false;
   }
   if ( ( RegForm.gender[0].checked == false ) && ( RegForm.gender[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   
   if ( ( RegForm.degree[0].checked == false ) && ( RegForm.degree[1].checked == false ) )
   {
   alert ( "Please choose your Degreee: UG or PG" );
   return false;
   }   
   if( document.RegForm.course.value == "-1" )
   {
     alert( "Please Select Your Course!" );
     document.RegForm.course.focus() ;
     return false;
   }   
   if ( ( RegForm.year[0].checked == false ) && ( RegForm.year[1].checked == false ) && ( RegForm.year[2].checked == false) )
   {
   alert ( "Please choose your Year: I or II or III" );
   return false;
   }
   if( document.RegForm.college.value == "" )
   {
     alert( "Please Enter your College Name" );
     document.RegForm.college.focus() ;
     return false;
   }   
   if( document.RegForm.dob.value == "-1" )
   {
     alert( "Please Select Your Date of Birth!" );
    
     return false;
   }
   if( document.RegForm.dobm.value == "-1" )
   {
     alert( "Please Select Your Date of Birth!" );
    
     return false;
   }   
   if( document.RegForm.doby.value == "-1" )
   {
     alert( "Please Select Your Date of Birth!" );
    
     return false;
   }   
   var email = document.RegForm.email.value;
   atpos = email.indexOf("@");
   dotpos = email.lastIndexOf(".");
   if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
   {
     alert("Please Enter Valid Email ID")
     document.RegForm.email.focus() ;
     return false;
   }
   if( document.RegForm.mobile.value == "" ||
   isNaN( document.RegForm.mobile.value) ||
   document.RegForm.mobile.value.length != 10 )
   {
   alert( "Please Enter your Mobile No in the format! Eg:9876543210" );
   document.RegForm.mobile.focus() ;
   return false;
   }
   if( document.RegForm.father.value == "" )
   {
   alert( "Please Enter your Father's Name" );
   document.RegForm.father.focus() ;
   return false;
   } 
   if( document.RegForm.mother.value == "" )
   {
     alert( "Please Enter your Mother's Name" );
     document.RegForm.mother.focus() ;
     return false;
   } 
   if( document.RegForm.address.value == "" )
   {
     alert( "Please Enter your Address" );
     document.RegForm.address.focus() ;
     return false;
   } 
   if( document.RegForm.pin.value == "" ||
           isNaN( document.RegForm.pin.value) ||
           document.RegForm.pin.value.length != 6 )
   {
     alert( "Please provide a pincode in the Format! Eg:624001" );
     document.RegForm.pin.focus() ;
     return false;
   }
   if( document.RegForm.blood.value == "-1" )
   {
     alert( "Please Select Your Blood Group!" );
    
     return false;
   }   
   return( true );
}