<?php
$host="localhost";
$user="root";
$password="";
$db="demo";
mysqli_connect($host,$user,$password);
mysqli_select_db($db);
if(isset($_POST['username']))
{
    $uname=$_POST['username'];
    $password=$_POST['password'];
    $sql="select * from loginform where user='".$uname."'AND Pass='".$password."' limit 1";
    $result=mysqli_query($sql);
    if(mysqli_num_rows($result)==1)
    {
        echo " You Have Sucessfully Logged in";
        exit();
    }
    else{
        echo " You Have Entered Incorrect Password";
        exit();
    }
}

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Login Form</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
<body>
<div class="loginbox">
    <img src="avatar1.png" class="avatar">
    <h1>Login Here</h1>
    <form method="POST" action="">
        <p>Username</p>
        <input type="text" name="username" placeholder="Enter Username">
        <p>Password</p>
        <input type="password" name="password" placeholder="Enter Password">
        <input type="submit" name="submit" value="Login">
        <a href="#">Forget Password?</a><br>
        <a href="newacc.html">Create New Account.</a>
    </form>
</div>
</body>
</html>