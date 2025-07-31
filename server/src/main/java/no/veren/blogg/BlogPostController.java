package no.veren.blogg;

import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import no.veren.blogg.service.BlogPostService;

@RestController
public class BlogPostController {

    private final BlogPostService service;

    public BlogPostController(BlogPostService service) {
        this.service = service;
    }

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @GetMapping(value = "/posts")
    public List<BlogPost> getAllBlogPosts() {
        try {
            return service.getAllBlogPosts();
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
            return Arrays.asList(new BlogPost("En feil har skjedd", "En slitsom feil..."));
        }
    }
}
