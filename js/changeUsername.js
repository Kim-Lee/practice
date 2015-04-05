$(function(){
	$("#username").bind("focus",function(){
		$(".username").addClass("changeUandP");
	})
	$("#username").bind("blur",function(){
		$(".username").removeClass("changeUandP");
		if($("#username").val() == ""){
			$(".tip").show().html("请输入用户名");

		}else{
			$(".tip").hide();
		}
	})
	$("#password").bind("focus",function(){
		$(".password").addClass("changeUandP");
	})
	$("#password").bind("blur",function(){
		$(".password").removeClass("changeUandP");
		if($("#password").val() == ""){
			$(".tip").show().html("请输入密码");

		}else{
			$(".tip").hide();
		}
	})
	$("#login").click(function(){
		if($("#username").val() != "" && $("#password").val() != ""){
			userLogin($("#username").val(),$("#password").val());
		}else{
			if($("#username").val() == ""){
			$(".tip").show().html("请输入用户名");
			$("#username").focus();
			return false;
			}else{
			$(".tip").show().html("请输入密码");
			$("#password").focus();
			return false;
			}
		}
	})

})
