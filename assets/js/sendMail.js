document.querySelector(".send-msg").addEventListener('submit',function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value
    var message = document.getElementById('message').value;

    fetch('mail_php/send_mail.php', {
        method: 'POST',
        body: JSON.stringify({ name, email, message,subject }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Message sending failed.');
        }
    }).catch(error => {
        alert('An error occurred while sending the message.');
    });
});