<?php
	include 'functions.php';
	require_once('config.php');
	session_start();

	// Connect to server and select database.
	($GLOBALS["___mysqli_ston"] = mysqli_connect(DB_HOST,  DB_USER,  DB_PASSWORD))or die("cannot connect");
	((bool)mysqli_query($GLOBALS["___mysqli_ston"], "USE " . constant('DB_DATABASE')))or die("cannot select DB");
	$tbl_name="topic"; // Table name


	$sql="SELECT * FROM $tbl_name ORDER BY id DESC";
	// ORDER BY id DESC is order result by descending
	$result=mysqli_query($GLOBALS["___mysqli_ston"], $sql);
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>SPAID - Forum</title>
		<link rel="stylesheet" type="text/css" href="../style/base.css">
		<link rel="stylesheet" type="text/css" href="../style/forum.css">
	</head>
	<body>
		<div id="header">
			<div id="navbar">
				<div id="logo">
					<a href="../index.html"><img src="../images/logo.png" alt="Logo" width="200" height="30"></a>
				</div>
				<ul>
					<li><a class="nav" href="academics.html">Academics</a></li>
					<li><a class="nav" href="resources.html">Resources</a></li>
					<li><a class="nav" href="stories.html">Stories</a></li>
					<li><a class="nav" href="forum.html">Forum</a></li>
					<li><a class="nav" href="aboutus.html">About Us</a></li>
				</ul>
			</div>
            <div id="navbarcollapsed">
                <div id="navbarmenu" class="navcollapsed">
                    <a class="nav" href="#">Menu</a>
                </div>
                <div id="navbaracademics" class="navcollapsed">
                    <a class="nav" href="academics.html">Academics</a>
                </div>
                <div id="navbarresources" class="navcollapsed">
                    <a class="nav" href="resources.html">Resources</a>
                </div>
                <div id="navbarstories" class="navcollapsed">
                    <a class="nav" href="stories.html">Stories</a>
                </div>
                <div id="navbarforum" class="navcollapsed">
                    <a class="nav" href="forum.html">Forum</a>
                </div>
                <div id="navbaraboutus" class="navcollapsed">
                    <a class="nav" href="aboutus.html">About Us</a>
                </div>
            </div>
		</div>
		
		<div id="body">
			<div id="maincontent">
				<div id="forumhead">
					<h1>Forum</h1>
				</div>
				
				<div id="loginhead">
                    <?php
                        if (isLoggedIn()){
                            $ID = $_SESSION['SESS_MEMBER_ID'];
                            $tbl_name_members = "members"; // change table name
                            $sql = "SELECT * FROM $tbl_name_members WHERE member_id='$ID'";
                            $result = mysql_query($sql);
                            $row = mysql_fetch_array($result);
                            echo '<h2>Welcome ' . $row['firstname'] . '</h2>';
                            echo '<p><a href="logout.php">Logout</a></p>';
                        }
                    ?>
				</div>
                
                <div id="account">
                    <div id="logintab" class="accounttab">Login</div>
                    <div id="registertab" class="accounttab">Register</div>
                    <div id="accountform">
                        <div id="loginform">
                            <form id="loginformelement" method="post" action="login.php">
                                <div>
                                    <label for="loginusername">Username:</label>
                                    <input type="text" id="loginusername" name="loginusername" size="20">
                                    <p id="loginusernamewarning" class="warning">Must be 1-32 alphanumeric characters</p>
                                </div>
                                <div>
                                    <label for="loginpassword">Password:</label>
                                    <input type="password" id="loginpassword" name="loginpassword" size="20">
                                    <p id="loginpasswordwarning" class="warning">Must be 8-32 alphanumeric characters</p>
                                </div>
                                <input type="submit" id="loginsubmit" value="Login">
                            </form>
                        </div>
                        <div id="registerform">
                            <form id="registerformelement" method="post" action="register.php">
                                <div>
                                    <label for="registerusername">Username:</label>
                                    <input type="text" id="registerusername" name="registerusername" size="20">
                                    <p id="registerusernamewarning" class="warning">Must be 1-32 alphanumeric characters</p>
                                </div>
                                <div>
                                    <label for="registerpassword">Password:</label>
                                    <input type="password" id="registerpassword" name="registerpassword" size="20">
                                    <p id="registerpasswordwarning" class="warning">Must be 8-32 alphanumeric characters</p>
                                </div>
                                <input type="submit" id="registersubmit" value="Register">
                            </form>
                        </div>
                    </div>
                </div>
				
				<div><img id="postthreadbutton" src="../images/postThread.png" alt="Post Thread" width="137" height=40"></div>
				
                <div id="forumblock">
					<div class="row rowtitle">
						Forum
					</div>
					
                    <?php
                        // Start looping table row
                        while($rows=mysqli_fetch_array($result)){ 
                    ?>
                    
					<div class="row rowthread">
                        <div class="hidden"><?php echo $rows['id']; ?></div>
                        <div class="threadtitle"><?php echo $rows['topic']; ?></div>
                        <div class="threadtimestamp"><?php echo $rows['datetime']; ?></div>
                        <div class="threadauthor"><?php echo $rows['firstname'] . ' ' . $rows['lastname']; ?></div>
                        <div class="threadcontent"> This is an interesting thread. It has a lot of content. This is an interesting thread. It has a lot of content. This is an interesting thread. It has a lot of content. This is an interesting thread. It has a lot of content. This is an interesting thread. It has a lot of content. This is an interesting thread. It has a lot of content. This is an interesting thread. It has a lot of content.</div>
						<div><img class="threadreplybutton" src="../images/postReply.png" alt="Post Reply" width="82" height="40"></div>
                    </div>

                    <?php
                        // Exit looping and close connection
                        }
                        mysql_close();
                    ?>
				</div>
                
				<div id="formwrapper">
					<div id="postthreadform">
						<form id="postthreadformelement" method="post" action="http://webdevfoundations.net/scripts/formdemo.asp">
							<p><h4>Post a thread</h4></p>
							<label id="titlelabel" for="postthreadtitle">Thread Title:</label>
							<textarea id="postthreadtitle" name="postthreadtitle" rows="1" cols="55"></textarea>
							<p id="postthreadtitlewarning" class="warning">Must be 1-64 characters</p>
							<label id="descriptionlabel" for="postthreaddescription">Description:</label>
							<textarea id="postthreaddescription" name="postthreaddescription" rows="6" cols="55"></textarea>
							<p id="postthreaddescriptionwarning" class="warning">Must be 1-512 characters</p>
							<input type="submit" id="submitthread" value="Post thread">
							<input type="button" class="cancel" value="Cancel">
						</form>
					</div>
                
					<div id="postreplyform">
						<form id="postreplyformelement" method="post" action="http://webdevfoundations.net/scripts/formdemo.asp">
							<p><h4>Post a reply</h4></p>
							<label id="replylabel" for="postreplydescription">Reply:</label>
							<textarea id="postreplydescription" name="postreplydescription" rows="6" cols="55"></textarea>
							<p id="postreplydescriptionwarning" class="warning">Must be 1-512 characters</p>
							<input type="submit" id="submitreply" value="Post reply">
							<input type="button" class="cancel" value="Cancel">
						</form>
					</div>
                </div>
			</div>
		</div>
	
		<div id="footer">
			<p>Copyright &copy; 2017 SPAID.</p>
			<div id="sitemap1"><a class="sitemaplink" href="academics.html">Academics</a>&nbsp; <a class="sitemaplink" href="courses.html">(Courses)</a>
			</div>
			<div id="sitemap2"><a class="sitemaplink" href="resources.html">Resources</a>
			</div>
			<div id="sitemap3"><a class="sitemaplink" href="stories.html">Stories</a>
			</div>
			<div id="sitemap4"><a class="sitemaplink" href="forum.html">Forum</a>
			</div>
			<div id="sitemap5"><a class="sitemaplink" href="aboutus.html">About Us</a>
			</div>
		</div>
        <script src="../scripts/jquery.js"></script>
		<script src="../scripts/navbar.js"></script>
        <script src="../scripts/account.js"></script>
        <script src="../scripts/thread.js"></script>
        <script src="../scripts/validate.js"></script>
		
	</body>
</html>