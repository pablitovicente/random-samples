 <?php
echo str_repeat("*", 200);
echo "\nStarting script\n";

$myfile = fopen("song.txt", "r") or die("Unable to open file!");

echo str_repeat("*", 200);
echo "\nFile was open\n";

echo str_repeat("*", 200);
echo "\n";

echo fread($myfile,filesize("song.txt"));

echo str_repeat("*", 200);
echo "\nFile was read";

fclose($myfile);
?> 
