/*
          JJJJJJJJJJJ     OOOOOOOOO     VVVVVVVV           VVVVVVVV   AAA               NNNNNNNN        NNNNNNNNIIIIIIIIII
          J:::::::::J   OO:::::::::OO   V::::::V           V::::::V  A:::A              N:::::::N       N::::::NI::::::::I
          J:::::::::J OO:::::::::::::OO V::::::V           V::::::V A:::::A             N::::::::N      N::::::NI::::::::I
          JJ:::::::JJO:::::::OOO:::::::OV::::::V           V::::::VA:::::::A            N:::::::::N     N::::::NII::::::II
            J:::::J  O::::::O   O::::::O V:::::V           V:::::VA:::::::::A           N::::::::::N    N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O  V:::::V         V:::::VA:::::A:::::A          N:::::::::::N   N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O   V:::::V       V:::::VA:::::A A:::::A         N:::::::N::::N  N::::::N  I::::I  
            J:::::j  O:::::O     O:::::O    V:::::V     V:::::VA:::::A   A:::::A        N::::::N N::::N N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O     V:::::V   V:::::VA:::::A     A:::::A       N::::::N  N::::N:::::::N  I::::I  
JJJJJJJ     J:::::J  O:::::O     O:::::O      V:::::V V:::::VA:::::AAAAAAAAA:::::A      N::::::N   N:::::::::::N  I::::I  
J:::::J     J:::::J  O:::::O     O:::::O       V:::::V:::::VA:::::::::::::::::::::A     N::::::N    N::::::::::N  I::::I  
J::::::J   J::::::J  O::::::O   O::::::O        V:::::::::VA:::::AAAAAAAAAAAAA:::::A    N::::::N     N:::::::::N  I::::I  
J:::::::JJJ:::::::J  O:::::::OOO:::::::O         V:::::::VA:::::A             A:::::A   N::::::N      N::::::::NII::::::II
 JJ:::::::::::::JJ    OO:::::::::::::OO           V:::::VA:::::A               A:::::A  N::::::N       N:::::::NI::::::::I
   JJ:::::::::JJ        OO:::::::::OO              V:::VA:::::A                 A:::::A N::::::N        N::::::NI::::::::I
     JJJJJJJJJ            OOOOOOOOO                 VVVAAAAAAA                   AAAAAAANNNNNNNN         NNNNNNNIIIIIIIIII

*/

function myValidation()
{
	var noinput = ("<img src=\../Images/Forms/ExclamationPoint.png\>" + "*Please fill out this field!")
	var invalidemail = ("<img src=\../Images/Forms/ExclamationPoint.png\>" + "*Invalid Email Address. Please check.")
	var invalidzipcode = ("<img src=\../Images/Forms/ExclamationPoint.png\>" + "Invalid Zip Code. Please check.")
	var invaliddate = ("<img src=\../Images/Forms/ExclamationPoint.png\>") + "Invalid Date. Please check."
	var invalidcontactnumber = ("<img src=\../Images/Forms/ExclamationPoint.png\>" + "*Invalid Contact Number. Please check.")
	var emailaddress = signupform.emailaddress.value;
	var firstname = signupform.firstname.value;
	var lastname = signupform.lastname.value;
	var city = signupform.city.value;
	var province = signupform.province.value;
	var zipcode = signupform.zipcode.value;
	var month = signupform.month.value;
	var day = signupform.day.value;
	var year = signupform.year.value;
	var contactnumber = signupform.contactnumber.value;
	var password = signupform.password.value;
	var confirmpassword = signupform.confirmpassword.value;
	var emailaddressvalidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var zipcodevalidation = /^([(0-9)]{4})$/;
	var contactnumbervalidation = /^([0-9\+\-]{3,15})$/;
	if (
			(emailaddress == null || emailaddress == "") ||
			(firstname == null || firstname == "") ||
			(lastname == null || lastname == "") ||
			(city == null || city == "") ||
			(province == "") ||
			(zipcode == null || zipcode == "") ||
			(month == null || month == "") ||
			(day == null || day == "") ||
			(year == null || year == "") ||
			(contactnumber == null || contactnumber == "") ||
			(password == null || password == "") ||
			(confirmpassword == null || confirmpassword == "") ||
			(password != confirmpassword) ||
			(emailaddressvalidation.test(signupform.emailaddress.value) == false) ||
			(zipcodevalidation.test(signupform.zipcode.value) == false) ||
			(contactnumbervalidation.test(signupform.contactnumber.value) == false)
		)
	{
		if (emailaddress == null || emailaddress == "") 
		{
			document.getElementById("noemailaddress").innerHTML = noinput;
			document.getElementById("noemailaddress").style.color = "#cb061a";
			document.getElementById("emailaddress").style.borderColor = "#cb061a";
		}
		else if (emailaddressvalidation.test(signupform.emailaddress.value) == false)
		{
			document.getElementById("emailaddress").style.borderColor = "#cb061a";
			document.getElementById("noemailaddress").innerHTML = invalidemail;
		}
		else
		{
			document.getElementById("noemailaddress").innerHTML = '';
			document.getElementById("emailaddress").style.borderColor = "#000000";
		}
		if (firstname == null || firstname == "")
		{
			document.getElementById("nofirstname").innerHTML = noinput;
			document.getElementById("nofirstname").style.color = "#cb061a";
			document.getElementById("firstname").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nofirstname").innerHTML = '';
			document.getElementById("firstname").style.borderColor = "#000000";
		}
		if (lastname == null || lastname == "")
		{
			document.getElementById("nolastname").innerHTML = noinput;
			document.getElementById("nolastname").style.color = "#cb061a";
			document.getElementById("lastname").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nolastname").innerHTML = '';
			document.getElementById("lastname").style.borderColor = "#000000";
		}
		if (city == null || city == "")
		{
			document.getElementById("nocity").innerHTML = noinput;
			document.getElementById("nocity").style.color = "#cb061a";
			document.getElementById("city").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nocity").innerHTML = '';
			document.getElementById("city").style.borderColor = "#000000";
		}
		if (province == "") 
		{
			document.getElementById("noprovince").innerHTML = noinput;
			document.getElementById("noprovince").style.color = "#cb061a";
			document.getElementById("province").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("noprovince").innerHTML = '';
			document.getElementById("province").style.borderColor = "#000000";
		}
		if (zipcode == null || zipcode == "")
		{
			document.getElementById("nozipcode").innerHTML = noinput;
			document.getElementById("nozipcode").style.color = "#cb061a";
			document.getElementById("zipcode").style.borderColor = "#cb061a";
		}
		else if (zipcodevalidation.test(signupform.zipcode.value) == false)
		{
			document.getElementById("nozipcode").innerHTML = invalidzipcode;
			document.getElementById("zipcode").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nozipcode").innerHTML = '';
			document.getElementById("zipcode").style.borderColor = "#000000";
		}
		if (
				(month == null || month == "") &&
				(day == null || day == "") &&
				(year == null || year == "")
			)
		{
			document.getElementById("nobirthday").innerHTML = noinput;
			document.getElementById("nobirthday").style.color = "#cb061a";
			document.getElementById("month").style.borderColor = "#cb061a";
			document.getElementById("day").style.borderColor = "#cb061a";
			document.getElementById("year").style.borderColor = "#cb061a";
		}
		else if (
					(month == null || month == "") ||
					(day == null || day == "") ||
					(year == null || year == "")
				)
		{
			document.getElementById("nobirthday").innerHTML = invaliddate;
			document.getElementById("month").style.borderColor = "#cb061a";
			document.getElementById("day").style.borderColor = "#cb061a";
			document.getElementById("year").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nobirthday").innerHTML = '';
			document.getElementById("month").style.borderColor = "#000000";
			document.getElementById("day").style.borderColor = "#000000";
			document.getElementById("year").style.borderColor = "#000000";
		}
		if (contactnumber == null || contactnumber == "") 
		{
			document.getElementById("nocontactnumber").innerHTML = noinput;
			document.getElementById("nocontactnumber").style.color = "#cb061a";
			document.getElementById("contactnumber").style.borderColor = "#cb061a";
		}
		else if (contactnumbervalidation.test(signupform.contactnumber.value) == false)
		{
			document.getElementById("nocontactnumber").innerHTML = invalidcontactnumber;
			document.getElementById("contactnumber").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nocontactnumber").innerHTML = '';
			document.getElementById("contactnumber").style.borderColor = "#000000";
		}
		if (password == null || password == "")
		{
			document.getElementById("nopassword").innerHTML = noinput;
			document.getElementById("nopassword").style.color = "#cb061a";
			document.getElementById("password").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nopassword").innerHTML = '';
			document.getElementById("password").style.borderColor = "#000000";
		}
		if (confirmpassword == null || confirmpassword == "")
		{
			document.getElementById("noconfirmpassword").innerHTML = noinput;
			document.getElementById("noconfirmpassword").style.color = "#cb061a";
			document.getElementById("confirmpassword").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("noconfirmpassword").innerHTML = '';
			document.getElementById("confirmpassword").style.borderColor = "#000000";
		}
		return false;
	}
	else
	{
		alert("Success!!!")
		return true;
	}
}

/* function from : https://gist.github.com/3559343 */
function changeType(x, type) 
{
    if(x.prop('type') == type)
    {
        return x;
    }
    try 
    {
        return x.prop('type', type); 
    } 
    catch(e) 
    {
        var html = $("<div>").append(x.clone()).html();
        var regex = /type=(\")?([^\"\s]+)(\")?/;
        var tmp = $(html.match(regex) == null ?
            html.replace(">", ' type="' + type + '">') :
            html.replace(regex, 'type="' + type + '"') );
       
        tmp.data('type', x.data('type') );
        var events = x.data('events');
        var cb = function(events) 
        {
            return function() 
            {    
                for(i in events)
                {
                    var y = events[i];
                    for(j in y)
                    tmp.bind(i, y[j].handler);
                }
       		}
    	}
    	(events);
   		x.replaceWith(tmp);
    	setTimeout(cb, 10); 
        return tmp;
    }
}