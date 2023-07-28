<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];


  $to = "gewrgiapap98@gmail.com";

  $subject = "Νέο μήνυμα από τη φόρμα επικοινωνίας";
  $headers = "From: " . $name . " <" . $email . ">\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";

  if (mail($to, $subject, $message, $headers)) {
    // Αποστολή επιτυχής
    echo "Το μήνυμα εστάλη με επιτυχία!";
  } else {
    // Αποτυχία αποστολής
    echo "Υπήρξε κάποιο σφάλμα κατά την αποστολή του μηνύματος.";
  }
}
?>
