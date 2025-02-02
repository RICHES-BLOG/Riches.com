<?php
// Configuration
$toEmail = 'richesbosses@gmail.com';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form values
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate form values
  if (empty($name) || empty($email) || empty($message)) {
    echo "Please fill out all fields!";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address!";
  } else {
    // Send email
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($toEmail, $subject, $body, $headers)) {
      echo "Email sent successfully!";
    } else {
      echo "Error sending email!";
    }
  }
}
?>


$secretKey = "YOUR_SECRET_KEY";
$response = $_POST['g-recaptcha-response'];
$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$response);
$responseData = json_decode($verifyResponse);
if ($responseData->success) {
    // Captcha is valid, process the form submission
} else {
    // Captcha is invalid, display an error message
    echo 'Invalid captcha, please try again.';
    exit;
}
