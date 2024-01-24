<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');  // Replace with the actual domain of your React app
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// Ambil data dari body request
$data = json_decode(file_get_contents('php://input'), true);

// Koneksi ke database
$conn = new mysqli('localhost', 'root', '', 'test');

// Periksa koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil nilai dari formulir
$nama = $data['nama'];
$sandi = $data['sandi'];
$role = $data['role'];
// Ambil nilai field formulir lainnya sesuai kebutuhan

// Lakukan operasi SQL untuk menyimpan data ke tabel
$sql = "INSERT INTO user (nama, sandi, role) VALUES ('$nama', '$sandi', '$role')";
// Tambahkan field formulir lainnya sesuai kebutuhan

if ($conn->query($sql) === TRUE) {
    $response = array('status' => 'success', 'message' => 'Data inserted successfully');
} else {
    $response = array('status' => 'error', 'message' => 'Error: ' . $sql . '<br>' . $conn->error);
}

echo json_encode($response);

// Tutup koneksi ke database
$conn->close();
?>