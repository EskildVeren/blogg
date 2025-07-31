package no.veren.blogg.controller;

import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import no.veren.blogg.model.BlogPost;
import no.veren.blogg.service.BlogPostService;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
public class BlogPostController {

    private final BlogPostService service;

    public BlogPostController(BlogPostService service) {
        this.service = service;
    }

    @GetMapping(value = "/posts")
    public List<BlogPost> getAllBlogPosts() {
        try {
            return service.getAllBlogPosts();
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
            return Arrays.asList(new BlogPost("En feil har skjedd", Arrays.asList("En slitsom feil...")));
        }
    }

    @GetMapping(value = "/posts/{blogPostTitle}")
    public BlogPost getBlogPost(@PathVariable String blogPostTitle) {
        try {
            return service.getBlogPost(blogPostTitle);
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
            return new BlogPost("En feil har skjedd", Arrays.asList("En slitsom feil..."));
        }
    }
}
