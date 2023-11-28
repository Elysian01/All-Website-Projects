package com.employee.crud.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Lob;

import java.util.Arrays;

public class EmployeeDTO {
    private Long id;
    private Integer eid;
    private String fname;
    private String lname;
    private String email;
    private String title;
    private byte[] photo;
    private Integer dno;
    private String password;
    private Boolean isadmin;


    public EmployeeDTO(Integer eid, String fname, String lname, String email, String title, byte[] photo, Integer dno, String password, Boolean isadmin) {
        this.eid = eid;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.title = title;
        this.photo = photo;
        this.dno = dno;
        this.password = password;
        this.isadmin = isadmin;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public EmployeeDTO() {
    }

    public Boolean getIsadmin() {
        return isadmin;
    }

    public void setIsadmin(Boolean isadmin) {
        this.isadmin = isadmin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getEid() {
        return eid;
    }

    public void setEid(Integer eid) {
        this.eid = eid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public Integer getDno() {
        return dno;
    }

    public void setDno(Integer dno) {
        this.dno = dno;
    }

    @Override
    public String toString() {
        return "EmployeeDTO{" +
                "id=" + id +
                ", eid=" + eid +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", email='" + email + '\'' +
                ", title='" + title + '\'' +
                ", photo=" + Arrays.toString(photo) +
                ", dno=" + dno +
                ", password='" + password + '\'' +
                '}';
    }
}
