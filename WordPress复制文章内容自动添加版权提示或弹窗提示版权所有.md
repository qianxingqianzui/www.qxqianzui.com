# 以下便是今天文章中所有命令 #
* 下面开始，在WordPress添加复制内容提示版权信息，将以下代码添加到functions.php最后面即可

 `//复制文章内容弹出版权提示框 function zm_copyright_tips() { 
 echo '<link rel="stylesheet" type="text/css" rel="external nofollow" target="_blank" href="https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.css" >'; 
 echo '<script src="https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.js"></script>'; 
 echo '<script>document.body.oncopy = function() { swal("复制成功！", "转载请务必保留简论博客www.jlii.net原文链接，谢谢合作！！","success");};</script>'; } 
 add_action( 'wp_footer', 'zm_copyright_tips', 100 );`
  
* 效果如下图所示：

![www.jlii.net](https://si.geilicdn.com/img1550903086-42f80000017abccccce70a21146b-unadjust_561_369.png)

*  下面开始在WordPress中添加在复制内容结尾跟随版权信息,将以下代码添加到footer.php的中即可：

`
<script type="text/javascript"> 
function addLink() { 
var selection = window.getSelection(); 
pagelink = ". 原文出自简论博客[https://www.jlii.net] 转载请保留原文链接: " + document.location.href; 
copytext = selection + pagelink; 
newdiv = document.createElement('div'); 
newdiv.style.position = 'absolute'; 
newdiv.style.left = '-99999px'; document.body.appendChild(newdiv); newdiv.innerHTML = copytext; 
selection.selectAllChildren(newdiv); 
window.setTimeout(function () { 
document.body.removeChild(newdiv); 
}, 100); 
} 
document.oncopy = addLink; 
</script><script type="text/javascript">
`

原文文章：[https://www.jlii.net/1676.html](https://www.jlii.net/1676.html)  



