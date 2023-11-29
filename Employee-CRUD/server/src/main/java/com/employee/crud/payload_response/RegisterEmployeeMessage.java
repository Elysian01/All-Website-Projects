package com.employee.crud.payload_response;

public class RegisterEmployeeMessage {
    String message;
    Boolean status;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public RegisterEmployeeMessage(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }

    @Override
    public String toString() {
        return "RegisterEmployeeMessage{" +
                "message='" + message + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
