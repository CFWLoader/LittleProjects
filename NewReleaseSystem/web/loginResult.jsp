<%@ page import="nrs.dao.AdminDao" %>
<%@ page import="nrs.dao.impl.AdminDaoLightImpl" %>
<%@ page import="nrs.entity.Admin" %>
<%--
  Created by IntelliJ IDEA.
  User: Evan
  Date: 2016/9/2
  Time: 23:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%

    String username = request.getParameter("inputEmail3");

    String password = request.getParameter("inputPassword3");

    String loginResult = "用户名不存在或密码不正确";

    String targetUrl = "homepage.jsp";

    if(username != null && password != null)
    {
        AdminDao adminDao = new AdminDaoLightImpl();

        if(adminDao.login(username, password))
        {
            loginResult = "登录成功";

            targetUrl = "adminPage.jsp";
        }
    }

%>

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bootstrap 3, from LayoutIt!</title>

    <meta name="description" content="Source code generated using layoutit.com">
    <meta name="author" content="LayoutIt!">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid" style="margin-top: 200px">
    <div class="row">
        <div class="col-md-12">
            <h2 class="text-primary text-center">
                <%=loginResult%>，3秒后自动跳转。
            </h2>
        </div>
    </div>
</div>
</body>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/scripts.js"></script>
<script>
    function jumpUrl()
    {
        location = "<%=targetUrl%>";
    }

    setTimeout(jumpUrl, 3000);
</script>
</html>
