<?php
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "weather";

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

  //echo "Connected successfully";
$sql = "SELECT * FROM cities";
$result = mysqli_query($conn,$sql); 
$myArray = array();
if ($result->num_rows > 0) {
// output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    }
    print json_encode($myArray);
} 
else 
{
   echo "0 results";
}
?>