<?php
declare(strict_types=1);

ini_set('display_errors', '0');

header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Robots-Tag: noindex, nofollow');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Method not allowed.';
    exit;
}

$contentLength = isset($_SERVER['CONTENT_LENGTH']) ? (int) $_SERVER['CONTENT_LENGTH'] : 0;
if ($contentLength > 20000) {
    redirect_for_language($_POST['language'] ?? '', false);
}

$invalidInput = false;

$language = normalize_single_line(read_field('language', $invalidInput));
$isEnglish = $language === 'en';

$website = normalize_single_line(read_field('website', $invalidInput));
if ($website !== '') {
    redirect_for_language($language, true);
}

$name = normalize_single_line(read_field('name', $invalidInput));
$company = normalize_single_line(read_field('company', $invalidInput));
$rawEmail = read_field('email', $invalidInput);
$emailHasHeaderInjection = has_header_injection($rawEmail);
$email = normalize_single_line($rawEmail);
$phone = normalize_single_line(read_field('phone', $invalidInput));
$message = normalize_message(read_field('message', $invalidInput));

if (
    $invalidInput ||
    $name === '' ||
    $email === '' ||
    $message === '' ||
    $emailHasHeaderInjection ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    field_length($name) > 120 ||
    field_length($company) > 160 ||
    field_length($email) > 254 ||
    field_length($phone) > 60 ||
    field_length($message) > 5000
) {
    redirect_for_language($language, false);
}

$recipient = 'post@dws-logistik.de';
$from = 'DWS Website <post@dws-logistik.de>';
$subjectText = 'Neue Anfrage über dws-logistik.de';
$subject = encode_mime_header($subjectText);
$messageForMail = str_replace("\n", "\r\n", $message);

$body = implode("\r\n", [
    'Language: ' . ($isEnglish ? 'English' : 'Deutsch'),
    'Name: ' . $name,
    'Company: ' . ($company !== '' ? $company : '-'),
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : '-'),
    'Message:',
    $messageForMail,
]);

$headers = [
    'From' => $from,
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
];

$sent = mail($recipient, $subject, $body, $headers);

if (!$sent) {
    error_log('DWS contact form mail delivery failed.');
}

redirect_for_language($language, $sent);

function read_field(string $name, bool &$invalidInput): string
{
    if (!array_key_exists($name, $_POST)) {
        return '';
    }

    if (!is_string($_POST[$name])) {
        $invalidInput = true;
        return '';
    }

    return $_POST[$name];
}

function normalize_single_line(string $value): string
{
    $value = normalize_common($value);
    $value = preg_replace('/\n+/', ' ', $value) ?? '';
    $value = preg_replace('/[ \t]+/', ' ', $value) ?? '';

    return trim($value);
}

function normalize_message(string $value): string
{
    return normalize_common($value);
}

function normalize_common(string $value): string
{
    $value = str_replace("\0", '', $value);
    $value = str_replace(["\r\n", "\r"], "\n", $value);

    return trim($value);
}

function field_length(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }

    return strlen($value);
}

function has_header_injection(string $value): bool
{
    return str_contains($value, "\r") || str_contains($value, "\n");
}

function encode_mime_header(string $value): string
{
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($value, 'UTF-8', 'B', "\r\n");
    }

    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function redirect_for_language(mixed $language, bool $success): void
{
    $isEnglish = is_string($language) && trim($language) === 'en';
    $location = $isEnglish
        ? ($success ? '/en/contact/#success' : '/en/contact/#error')
        : ($success ? '/kontakt/#success' : '/kontakt/#error');

    header('Location: ' . $location, true, 303);
    exit;
}
