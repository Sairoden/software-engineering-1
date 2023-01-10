<?php
require 'connect.php';


if($method == 'POST') {
  $firstName = $_POST["firstname"];
  $lastName = $_POST["lastname"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  //  insert data to database
  $sql = "insert into information (FirstName, LastName, Email, Password) values ('$firstName', '$lastName', '$email', '$password')"; 

  // run sql statement
  $result = mysqli_query($con,$sql);
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
    } 
  
}
$con->close();
?>