package no.veren.blogg;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlogPostController {

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @GetMapping(value = "/posts")
    public List<BlogPost> getAllBlogPosts() {
        return Arrays.asList(new BlogPost("Title vitle", "A tale of mole bole"));
    }
}
