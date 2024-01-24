<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');  // Replace with the actual domain of your React app
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


// Fetch data from your database or any other source
$conn = new mysqli("localhost","root","","test");
$sql = "SELECT * FROM admin";
$res = $conn->query($sql);
while($row = $res->fetch_assoc()) {
    $rows[] = $row;
}

// Convert the data to JSON format
echo json_encode($rows);
?>