function click1()
{
    var num1=document.getElementById("number").value;
    var key1=document.getElementById("key").value;
    var re=/^1[34578]\d{9}$/;  //判断手机号码
    var re1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[#&\*\?@])[a-zA-Z0-9#&\*\?@]{9,15}$/;   //判断密码
    if(re.test(num1)&&re1.test(key1))
    {
        alert("修改成功");
    }
    else
    {
        alert("格式错误");
    }
}