package com.mls.pojo;

import java.util.Date;

public class Event {
    private Integer id;

    private String name;

    private String introuction;

    private Date date;

    private Date updatetime;

    private Date createtime;

    public Event(Integer id, String name, String introuction, Date date, Date updatetime, Date createtime) {
        this.id = id;
        this.name = name;
        this.introuction = introuction;
        this.date = date;
        this.updatetime = updatetime;
        this.createtime = createtime;
    }

    public Event() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getIntrouction() {
        return introuction;
    }

    public void setIntrouction(String introuction) {
        this.introuction = introuction == null ? null : introuction.trim();
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}