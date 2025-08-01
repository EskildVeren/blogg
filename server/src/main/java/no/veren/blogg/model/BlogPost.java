package no.veren.blogg.model;

import java.util.List;

public class BlogPost {

    private String title;
    private List<String> body;
    private String dateLastModified;
    private String dateCreated;

    public BlogPost(String title, List<String> body) {
        this.title = title;
        this.body = body;
    }

    // Data format DD-MON-YYYY
    public BlogPost(String title, List<String> body, String dateLastModified, String dateCreated) {
        this.title = title;
        this.body = body;
        this.dateLastModified = dateLastModified;
        this.dateCreated = dateCreated;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getBody() {
        return body;
    }

    public void setBody(List<String> body) {
        this.body = body;
    }

    public String getDateLastModified() {
        return dateLastModified;
    }

    public void setDateLastModified(String dateLastModified) {
        this.dateLastModified = dateLastModified;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }
}
