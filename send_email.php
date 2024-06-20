<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = 'tupokilic@gmail.com'; // Replace with your own email address

    // Set email subject
    $subject = 'New Message from Contact Form';

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Set headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo '<p style="color: green;">Your message has been sent successfully!</p>';
    } else {
        echo '<p style="color: red;">Oops! Something went wrong, please try again later.</p>';
    }
}
?>
