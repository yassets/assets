<?php

$content = file_get_contents("php://input");

$array = json_decode($content, true);

$visitor_id = $_COOKIE['__cflvid'] ?? false;

$header = [
    'User-Agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
    'Connection：' => 'keepalive',
    'Content-Type' => 'application/json',
    'Remote-Client-IP' => $_SERVER['REMOTE_ADDR'],
];

if($visitor_id)
    $header['Cfl-Vid'] = $visitor_id;

$headers = [];

foreach ($header as $key => $value) {
    $headers[] = "$key: $value";
}


$result = yuri_post("https://api.fpjs.io", $array, $headers);

$result_array = json_decode($result,true);

if(isset($result_array['visitorId'])){
    setcookie('__cflvid',$result_array['visitorId'],2147483647);
}

print_r($result);

function yuri_post($uri, $array, $headers = [])
{
    $ch = curl_init($uri);
    # Setup request to send json via POST.
    $payload = json_encode($array);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    # Return response instead of printing.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    # Send request.
    $result = curl_exec($ch);
    return $result;
}
