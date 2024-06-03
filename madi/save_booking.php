<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "barbershop";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO bookings (date, time, name, number, age, gender, description) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssiss", $date, $time, $name, $number, $age, $gender, $description);

// Set parameters and execute
$date = $_POST['date'];
$time = $_POST['time'];
$name = $_POST['name'];
$number = $_POST['number'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$description = $_POST['description'];
$stmt->execute();

echo "New booking created successfully";

$stmt->close();
$conn->close();
?>
