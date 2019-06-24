// JavaScript Document
 function sendEmail(contactForm) {
        emailjs.send('gmail', 'acorn_pre_school', {
            "from_name": contactForm.icon_prefix.value,
            "child_name": contactForm.child_name,
            "dob": contactForm.child_dob,
            "address": contactForm.address,
            "start_date": contactForm.start_date,
            "additional_info": contactForm.textarea1,
            "from_email": contactForm.icon_computer,
            "telephone": contactForm.icon_phone
        })
        .then( 
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, 
            function(error) {
                console.log('FAILED...', error);
            }
        );
        return false
    }
