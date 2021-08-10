echo "#EXTINF:-1,TGRT FM\n";
$source = file_get_contents("https://www.youtube.com/user/tgrtfm/live");
preg_match('@"hlsvp":"(.*?)"@s',$source,$getm3u);
$getm3u[1] = str_replace("\/","/",$getm3u[1]);
echo $getm3u[1];
echo "\n";