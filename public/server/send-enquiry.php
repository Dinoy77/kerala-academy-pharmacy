<?php
// send-enquiry.php
// Handles the floating Enquiry form submission and emails it to the college.

// Only allow requests from your real site (both with and without www, just in case)
// TEMPORARY FOR TESTING — remove localhost before final launch
$allowedOrigins = [
    "https://kap.ac.in",
    "https://www.kap.ac.in",
    "http://localhost:5173",
];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle the browser's CORS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit();
}

// Read the incoming JSON body
$data = json_decode(file_get_contents("php://input"), true);

$name    = isset($data['name']) ? trim($data['name']) : '';
$email   = isset($data['email']) ? trim($data['email']) : '';
$phone   = isset($data['phone']) ? trim($data['phone']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Basic server-side validation (mirrors the frontend rules)
if (strlen($name) < 3) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid name"]);
    exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid email"]);
    exit();
}
if (!preg_match('/^[0-9]{10}$/', $phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid phone"]);
    exit();
}
if (strlen($message) < 10) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Message too short"]);
    exit();
}

// -------- CONFIGURE THIS --------
$to = "info@kap.ac.in";
$subject = "New Enquiry from KAP Website";

// SMTP credentials (from cPanel Email Accounts > Connect Devices)
$smtpHost = "mail.kap.ac.in";
$smtpUsername = "info@kap.ac.in";
$smtpPassword = "PASTE_THE_MAILBOX_PASSWORD_HERE"; // <-- fill this in directly in cPanel's file editor
$smtpPort = 465;
// ---------------------------------

$body = "You have received a new enquiry from the website:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Message:\n$message\n";

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

    $mail->setFrom($smtpUsername, "KAP Website");
    $mail->addAddress($to);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body = $body;

    $mail->send();
    $sent = true;
} catch (Exception $e) {
    error_log("Enquiry mail failed: " . $mail->ErrorInfo);
    $sent = false;
}

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Mail could not be sent"]);
}