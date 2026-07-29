<?php
// send-application.php
// Handles the Apply Now form submission (with file uploads) and emails it to the college.

$allowedOrigins = [
    "https://kap.ac.in",
    "https://www.kap.ac.in",
];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit();
}

// -------- CONFIGURE THIS --------
$to = "info@kap.ac.in";
$subject = "New Application Form Submission — KAP Website";

$smtpHost = "mail.kap.ac.in";
$smtpUsername = "info@kap.ac.in";
$smtpPassword = "PASTE_THE_MAILBOX_PASSWORD_HERE"; // <-- fill this in directly in cPanel's file editor
$smtpPort = 465;
// ---------------------------------

// Collect all text fields exactly as sent by the form
$fields = [
    "First Name" => $_POST['buyerFirstName'] ?? '',
    "Last Name" => $_POST['buyerLastName'] ?? '',
    "Email" => $_POST['buyerEmail'] ?? '',
    "Phone No" => $_POST['buyerPhone'] ?? '',
    "Date of Birth" => $_POST['dob'] ?? '',
    "Course" => $_POST['course'] ?? '',
    "Alternate No" => $_POST['altPhone'] ?? '',
    "Address" => $_POST['address'] ?? '',
    "Pincode" => $_POST['pincode'] ?? '',
    "District" => $_POST['district'] ?? '',
    "State" => $_POST['state'] ?? '',
    "10th Board Percentage" => $_POST['tenthPercentage'] ?? '',
    "12th Board Percentage" => $_POST['twelfthPercentage'] ?? '',
    "Subject Stream" => $_POST['subject'] ?? '',
    "Subject 1" => $_POST['subject1'] ?? '',
    "Subject 2" => $_POST['subject2'] ?? '',
    "Subject 3" => $_POST['subject3'] ?? '',
    "Marks (Subject 1)" => $_POST['marks1'] ?? '',
    "Marks (Subject 2)" => $_POST['marks2'] ?? '',
    "Marks (Subject 3)" => $_POST['marks3'] ?? '',
    "Father's Name" => $_POST['fatherName'] ?? '',
    "Father's Occupation" => $_POST['fatherOccupation'] ?? '',
    "Father's Annual Salary" => $_POST['fatherSalary'] ?? '',
    "Father's Phone" => $_POST['fathersPhone'] ?? '',
    "Father's Email" => $_POST['fathersEmail'] ?? '',
    "Mother's Name" => $_POST['motherName'] ?? '',
    "Mother's Occupation" => $_POST['motherOccupation'] ?? '',
    "Mother's Annual Salary" => $_POST['motherSalary'] ?? '',
    "Mother's Phone" => $_POST['mothersPhone'] ?? '',
    "Mother's Email" => $_POST['mothersEmail'] ?? '',
];

// Basic required-field check (mirrors the frontend `required` attributes)
$requiredFields = [
    "buyerFirstName", "buyerLastName", "buyerEmail", "buyerPhone", "dob", "course",
    "address", "district", "state", "tenthPercentage", "twelfthPercentage",
    "subject", "subject1", "marks1", "marks2", "marks3",
    "fatherName", "fatherOccupation", "fathersPhone", "fathersEmail",
    "motherName", "motherOccupation", "mothersPhone", "mothersEmail",
];
foreach ($requiredFields as $field) {
    if (empty($_POST[$field])) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Missing required field: $field"]);
        exit();
    }
}
if (!filter_var($_POST['buyerEmail'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid applicant email"]);
    exit();
}

// Build the email body
$body = "A new application has been submitted through the KAP website:\n\n";
foreach ($fields as $label => $value) {
    $body .= "$label: $value\n";
}

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$sent = false;

try {
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $smtpPort;

    $mail->setFrom($smtpUsername, "KAP Website — Applications");
    $mail->addAddress($to);
    $mail->addReplyTo($_POST['buyerEmail'], $_POST['buyerFirstName'] . ' ' . $_POST['buyerLastName']);

    $mail->Subject = $subject;
    $mail->Body = $body;

    // Attach the 4 uploaded files, if present
    $fileFields = ['photo', 'signature', 'sslc', 'plustwo'];
    foreach ($fileFields as $fieldName) {
        if (isset($_FILES[$fieldName]) && $_FILES[$fieldName]['error'] === UPLOAD_ERR_OK) {
            $mail->addAttachment(
                $_FILES[$fieldName]['tmp_name'],
                $_FILES[$fieldName]['name']
            );
        }
    }

    $mail->send();
    $sent = true;
} catch (Exception $e) {
    error_log("Application mail failed: " . $mail->ErrorInfo);
    $sent = false;
}

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Mail could not be sent"]);
}