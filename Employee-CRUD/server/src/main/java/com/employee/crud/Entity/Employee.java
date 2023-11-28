package com.employee.crud.Entity;

import jakarta.persistence.*;

import java.util.Arrays;

@Entity
@Table(name="employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "eid")
    private Integer eid;

    @Column(name = "fname", nullable = false, length = 255)
    private String fname;

    @Column(name = "lname", length = 255)
    private String lname;

    @Column(name = "email", unique = true, nullable = false, length = 255)
    private String email;

    @Column(name = "title", length = 255)
    private String title;

    @Lob
    @Column(name = "photo")
    private byte[] photo;

    @Column(name = "dno")
    private Integer dno;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "isadmin")
    private Boolean isadmin;

//    @ManyToOne
//    @JoinColumn(name = "dno", referencedColumnName = "dept_id", insertable = true, updatable = true)
//    private Department department;

    // Constructors, getters, and setters


    public Employee(Integer eid, String fname, String lname, String email, String title, byte[] photo, Integer dno, String password, Boolean isadmin) {
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

    public Employee() {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", eid=" + eid +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", email='" + email + '\'' +
                ", title='" + title + '\'' +
                ", photo=" + Arrays.toString(photo) +
                ", dno=" + dno +
                ", password='" + password + '\'' +
                ", isadmin=" + isadmin +
                '}';
    }

    public boolean isIsadmin() {
        return isadmin;
    }
}
