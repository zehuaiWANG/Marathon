package com.mls.pojo;

public class User {
    private String username;

    private String password;

    private String forgetques;

    private String forgetans;

    public User(String username, String password, String forgetques, String forgetans) {
        this.username = username;
        this.password = password;
        this.forgetques = forgetques;
        this.forgetans = forgetans;
    }

    public User() {
        super();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getForgetques() {
        return forgetques;
    }

    public void setForgetques(String forgetques) {
        this.forgetques = forgetques == null ? null : forgetques.trim();
    }

    public String getForgetans() {
        return forgetans;
    }

    public void setForgetans(String forgetans) {
        this.forgetans = forgetans == null ? null : forgetans.trim();
    }
}