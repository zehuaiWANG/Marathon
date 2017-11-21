package com.mls.controller.protal;

import com.mls.common.ServerResponse;
import com.mls.pojo.User;
import com.mls.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/user/")
public class UserController {

    @Autowired
    private IUserService iUserService;

    /*用户登录*/
    @RequestMapping(value = "login.do", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> login(String username, String password, HttpSession session){
        if (iUserService.login(username, password) > 0 ){
            session.setAttribute("username",username);
            return ServerResponse.createBySuccessMessage("登录成功");
        }else{
            return ServerResponse.createByErrorMessage("登录失败");
        }
    }

    /*用户注册*/
    @RequestMapping(value = "register.do", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> register(String username, String password, String forgetques, String forgetans){
        if ( username.isEmpty()){
            return ServerResponse.createByErrorMessage("username不能为空");
        }
        if (iUserService.getUserByName(username) != null){
            return ServerResponse.createByErrorMessage("username已存在");
        }
        if( password.isEmpty()){
            return ServerResponse.createByErrorMessage("password不能为空");
        }
        if( forgetques.isEmpty()){
            return ServerResponse.createByErrorMessage("forgetques不能为空");
        }
        if (forgetans.isEmpty()){
            return ServerResponse.createByErrorMessage("forgetams不能为空");
        }
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);
        newUser.setForgetques(forgetques);
        newUser.setForgetans(forgetans);
        if (iUserService.insertSelective(newUser) == 0){
            return ServerResponse.createByErrorMessage("注册失败");
        }
        else{
            return ServerResponse.createBySuccessMessage("注册成功");
        }
    }

    /*修改密码*/
    @RequestMapping(value = "getPassword.do", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<String> getPassword(String forgetQues, String forgetAns, String username, String newPassword){
        if (iUserService.getUserByName(username) == null)
            return ServerResponse.createByErrorMessage("username不存在");
        if (iUserService.getComfirm(username, forgetQues, forgetAns) == 0)
            return ServerResponse.createByErrorMessage("验证信息错误");
        else{
             User newUser = new User();
             newUser.setUsername(username);
             newUser.setPassword(newPassword);
             newUser.setForgetques(forgetQues);
             newUser.setForgetans(forgetAns);
             iUserService.updateByPrimaryKey(newUser);
            return ServerResponse.createBySuccessMessage("修改成功");
        }
    }

    /*获取当前用户名称*/
    @RequestMapping(value = "getCurrentUsername.do", method = RequestMethod.POST)
    @ResponseBody
    public  ServerResponse getCurrentUsername(HttpSession session){
        if (session.getAttribute("username").equals(""))
            return ServerResponse.createByErrorMessage("用户未登录");
        return ServerResponse.createBySuccessMessage(session.getAttribute("username").toString());
    }

    /*退出登录*/
    @RequestMapping(value = "removeUser.do", method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse removeUser(HttpSession session){
        if ( ! session.getAttribute("username").equals(""))
            session.removeAttribute("username");
        return ServerResponse.createBySuccess("注销成功");
    }
}
