<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate form fields
    if (!empty($name) && !empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Recipient email (replace this with your actual email)
            $to = "your-email@example.com";

            // Subject and message
            $subject = "New Contact Form Submission from $name";
            $email_message = "
            Name: $name\n
            Email: $email\n
            Message: $message
            ";

            // Headers
            $headers = "From: $email\r\n";
            $headers .= "Reply-To: $email\r\n";

            // Try to send the email
            if (mail($to, $subject, $email_message, $headers)) {
                // Email sent successfully
                echo "Thank you for your message, we will get back to you soon!";
            } else {
                // Error sending email
                echo "Sorry, there was an issue sending your message. Please try again later.";
            }
        } else {
            // Invalid email address
            echo "Please enter a valid email address.";
        }
    } else {
        // Missing form fields
        echo "Please fill in all required fields.";
    }
} else {
    // If form was not submitted via POST
    echo "Invalid form submission.";
}
?>
