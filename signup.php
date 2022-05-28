<?php
   // connect to the database 
include("../snoop-backend/connection.php");
print_r($mysqli);

// get the names for the super array 

$fullname=@$_GET["fullname"];
$email=@$_GET["email"];
$gender=@$_GET["gender"];
$password=@$_GET["password"];
$dob=@$_GET["dob"];

// inserting the user to the data base

$mysqli->query("insert into users (date_of_birth,email,full_name,gender,password,user_type) values('$dob','$email','$fullname',$gender,'$password',1)");


header("location: index.html");


?>  