<?php
require 'connect.php';


if($method == 'POST') {

  $email = $_POST["email"];
  $password = $_POST["password"];
  //  select data to database
  $sql = "SELECT * FROM information WHERE Email = '".$email."' AND Password = '".$password."' "; 

  // run sql statement
  $result = mysqli_query($con,$sql);
  //check if email and password is in the database 
    $nums = mysqli_num_rows($result);
    $rs = mysqli_fetch_array($result);
    
    // print $nums;
    
    if ($nums > 0) {
       $information = array("id"=>$rs["id"], 
        "firstname"=>$rs["FirstName"], 
                            "lastname"=>$rs["LastName"], 
                            "email"=>$rs["Email"]
        );
            echo json_encode($information);
    } 
    else {
        http_response_code(404);
        die(mysqli_error($con));
    }
  
}
$con->close();
?>