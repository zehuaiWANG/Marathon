package com.mls.pojo;

public class Participate {
    private byte[] username;

    private Integer eventid;

    private String coordinate;

    public Participate(byte[] username, Integer eventid, String coordinate) {
        this.username = username;
        this.eventid = eventid;
        this.coordinate = coordinate;
    }

    public Participate() {
        super();
    }

    public byte[] getUsername() {
        return username;
    }

    public void setUsername(byte[] username) {
        this.username = username;
    }

    public Integer getEventid() {
        return eventid;
    }

    public void setEventid(Integer eventid) {
        this.eventid = eventid;
    }

    public String getCoordinate() {
        return coordinate;
    }

    public void setCoordinate(String coordinate) {
        this.coordinate = coordinate == null ? null : coordinate.trim();
    }
}